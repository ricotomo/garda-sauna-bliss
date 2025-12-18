import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon, Clock, Users, Minus, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

const PRICE_PER_PERSON = 30;

const Booking = () => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);

  const handleBook = () => {
    if (!date || !selectedTime) {
      toast.error('Please select a date and time');
      return;
    }
    
    toast.success(`Booking confirmed for ${format(date, 'PPP')} at ${selectedTime} for ${guests} guests`);
  };

  const total = guests * PRICE_PER_PERSON;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-4">
                {t.booking.title}
              </h1>
              <p className="font-body text-muted-foreground text-lg">
                {t.booking.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="pb-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              {/* Price Info */}
              <div className="text-center mb-12 p-8 bg-cream rounded-sm">
                <div className="font-heading text-4xl text-foreground mb-2">
                  {t.booking.price}
                </div>
                <div className="font-body text-muted-foreground">
                  {t.booking.perPerson} · {t.booking.duration}
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-8">
                <label className="font-body text-sm text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CalendarIcon size={16} />
                  {t.booking.selectDate}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-body h-14 border-border",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, 'PPP') : t.booking.selectDate}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date() || date < addDays(new Date(), -1)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="mb-8">
                <label className="font-body text-sm text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Clock size={16} />
                  {t.booking.selectTime}
                </label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-3 px-4 font-body text-sm border transition-colors",
                        selectedTime === time
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-foreground border-border hover:border-foreground"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests Selection */}
              <div className="mb-12">
                <label className="font-body text-sm text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Users size={16} />
                  {t.booking.guests}
                </label>
                <div className="flex items-center justify-center gap-6 p-6 bg-cream rounded-sm">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-12 h-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
                    aria-label="Decrease guests"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-heading text-3xl w-16 text-center">
                    {guests}
                  </span>
                  <button
                    onClick={() => setGuests(Math.min(8, guests + 1))}
                    className="w-12 h-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
                    aria-label="Increase guests"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Total & Book Button */}
              <div className="border-t border-border pt-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-body text-muted-foreground">
                    {t.booking.total}
                  </span>
                  <span className="font-heading text-3xl text-foreground">
                    €{total}
                  </span>
                </div>
                <button
                  onClick={handleBook}
                  disabled={!date || !selectedTime}
                  className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t.booking.book}
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;

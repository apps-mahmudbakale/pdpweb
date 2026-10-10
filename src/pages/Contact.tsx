import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card, IconTile } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../lib/cn';
import { party } from '../data/party';

/** Replace these with the secretariat's real details before launch. */
const SECRETARIAT = {
  email: 'info@peoplesdemocraticparty.com.ng',
  phone: '+234 800 000 0000',
  hours: 'Monday – Friday, 9:00 – 17:00',
} as const;

type Field = 'name' | 'email' | 'phone' | 'state' | 'subject' | 'message';

const subjects = [
  'Membership enquiry',
  'Ward congress / chapter matter',
  'Donation and party funding',
  'Platform or policy question',
  'Media request',
  'Other',
] as const;

const initialValues: Record<Field, string> = {
  name: '',
  email: '',
  phone: '',
  state: '',
  subject: subjects[0],
  message: '',
};

function validate(values: Record<Field, string>): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (values.phone.trim() && !/^[\d\s+()-]{7,}$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';
  if (values.message.trim().length < 20)
    errors.message = 'Please give us at least a couple of sentences (20 characters minimum).';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  useSeo({
    title: 'Contact',
    description: `Contact the Peoples Democratic Party National Secretariat in Abuja, or enquire about membership. ${party.hq}.`,
  });

  const set = (field: Field) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      statusRef.current?.focus();
      return;
    }

    // No backend is wired up in this project, so the enquiry is handed to the
    // visitor's mail client. Swap this block for a POST to your form endpoint.
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      values.state ? `State: ${values.state}` : null,
      `Subject: ${values.subject}`,
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${SECRETARIAT.email}?subject=${encodeURIComponent(
      `[PDP website] ${values.subject}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const fieldClass = (field: Field) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400',
      'focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20',
      errors[field] ? 'border-crimson-500' : 'border-ink-300',
    );

  const labelClass = 'block text-sm font-semibold text-ink-800';

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the National Secretariat."
        lede="The secretariat is at Wadata Plaza in Wuse, Abuja. For membership, the fastest route is your ward chairman — but the national office will also point you to the right chapter."
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
            {/* Contact details */}
            <div>
              <SectionHeading eyebrow="Reach us" title="Secretariat details" />

              <ul className="mt-10 space-y-5">
                <li className="flex gap-4">
                  <IconTile>
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </IconTile>
                  <div>
                    <h3 className="font-semibold text-ink-900">National Headquarters</h3>
                    <address className="mt-1 text-pretty text-sm not-italic leading-relaxed text-ink-600">
                      {party.hq}
                    </address>
                    <a
                      href="https://maps.google.com/?q=Wadata+Plaza+Michael+Okpara+Way+Wuse+Abuja"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-2 inline-block text-sm font-semibold text-green-700 hover:text-green-800"
                    >
                      Open in maps
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <IconTile>
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </IconTile>
                  <div>
                    <h3 className="font-semibold text-ink-900">Email</h3>
                    <a
                      href={`mailto:${SECRETARIAT.email}`}
                      className="mt-1 block break-all text-sm text-ink-600 hover:text-green-700"
                    >
                      {SECRETARIAT.email}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <IconTile>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </IconTile>
                  <div>
                    <h3 className="font-semibold text-ink-900">Telephone</h3>
                    <a
                      href={`tel:${SECRETARIAT.phone.replace(/\s/g, '')}`}
                      className="mt-1 block text-sm text-ink-600 hover:text-green-700"
                    >
                      {SECRETARIAT.phone}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <IconTile>
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </IconTile>
                  <div>
                    <h3 className="font-semibold text-ink-900">Office hours</h3>
                    <p className="mt-1 text-sm text-ink-600">{SECRETARIAT.hours}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="font-display text-lg font-semibold text-green-950">
                  Want to join the party?
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-green-900/80">
                  Registration is handled at ward level, not at the national office. Use the form
                  to tell us your state and we will connect you with the right state chapter.
                </p>
                <a
                  href="#join"
                  className="mt-4 inline-block text-sm font-semibold text-green-800 hover:text-green-900"
                >
                  Go to the membership form
                </a>
              </div>
            </div>

            {/* Form */}
            <Card id="join" className="scroll-mt-28 p-7 sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink-900">
                Send an enquiry
              </h2>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-600">
                Fields marked with an asterisk are required.
              </p>

              <div
                ref={statusRef}
                tabIndex={-1}
                aria-live="polite"
                className="focus:outline-none"
              >
                {sent ? (
                  <p className="mt-6 flex items-start gap-3 rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-900">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="text-pretty leading-relaxed">
                      Your email client should now be open with the message ready to send. If it
                      did not open, email us directly at{' '}
                      <a href={`mailto:${SECRETARIAT.email}`} className="font-semibold underline">
                        {SECRETARIAT.email}
                      </a>
                      .
                    </span>
                  </p>
                ) : null}

                {Object.keys(errors).length > 0 && !sent ? (
                  <p className="mt-6 flex items-start gap-3 rounded-xl border border-crimson-300 bg-crimson-50 p-4 text-sm text-crimson-900">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="text-pretty leading-relaxed">
                      Please correct the highlighted {Object.keys(errors).length === 1 ? 'field' : 'fields'} below.
                    </span>
                  </p>
                ) : null}
              </div>

              <form onSubmit={onSubmit} noValidate className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={(e) => set('name')(e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={cn('mt-1.5', fieldClass('name'))}
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-1.5 text-xs font-medium text-crimson-700">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={(e) => set('email')(e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={cn('mt-1.5', fieldClass('email'))}
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-1.5 text-xs font-medium text-crimson-700">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone <span className="font-normal text-ink-500">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => set('phone')(e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={cn('mt-1.5', fieldClass('phone'))}
                    />
                    {errors.phone ? (
                      <p id="phone-error" className="mt-1.5 text-xs font-medium text-crimson-700">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="state" className={labelClass}>
                      State <span className="font-normal text-ink-500">(optional)</span>
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      autoComplete="address-level1"
                      placeholder="e.g. Kano"
                      value={values.state}
                      onChange={(e) => set('state')(e.target.value)}
                      className={cn('mt-1.5', fieldClass('state'))}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={(e) => set('subject')(e.target.value)}
                    className={cn('mt-1.5', fieldClass('subject'))}
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={values.message}
                    onChange={(e) => set('message')(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                    className={cn('mt-1.5 resize-y', fieldClass('message'))}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-xs font-medium text-crimson-700">
                      {errors.message}
                    </p>
                  ) : (
                    <p id="message-hint" className="mt-1.5 text-xs text-ink-500">
                      Tell us your state and ward, if you have one.
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Button type="submit" size="lg">
                    Send enquiry
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <p className="text-xs text-ink-500">We aim to reply within five working days.</p>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="muted" className="!py-14">
        <Container>
          <p className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5 text-sm leading-relaxed text-ink-600">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
            <span className="text-pretty">
              The telephone number and email address above are placeholders. Replace them in{' '}
              <code className="rounded bg-ink-100 px-1.5 py-0.5 text-xs">src/pages/Contact.tsx</code>{' '}
              before launch. The form currently hands the message to the visitor's email client
              because no backend is connected.
            </span>
          </p>
        </Container>
      </Section>
    </>
  );
}

'use client'

import { useFormState } from 'react-dom';
import { handleContact } from './actions';
import { ReactElement, useState } from 'react';

export default function ContactPage() {
  const [state, formAction] = useFormState(handleContact, { message: '' });
  const [text, setText] = useState("");

  return (
    <form action={formAction}>
      <input name="name" placeholder="Your name" />
      <textarea name="message" placeholder="Your message" value={text} 
      onChange={(event)=>{
        setText(event.target.value);
      }} />
      <button type="submit">Send</button>

      {state.message && <p>{state.message}</p>}
    </form>
  );
}
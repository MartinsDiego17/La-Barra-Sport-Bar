"use client";

import Reservas from '@/app/components/reservas/Reservas';
import { useEffect, useState } from 'react';

const Page = () => {
  const [dias, setDias] = useState([]);
  const [mes, setMes] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const date = new Date();
    let month = date.getMonth() + 1;
    let max;
    setMes(month);
    let currentDay = date.getDate();
    const days = [];
    switch (month) {
      case 2: { max = 28; break };
      case 3: { max = 31; break };
      case 4: { max = 30; break };
      case 5: { max = 31; break };
      case 6: { max = 30; break };
      case 7: { max = 31; break };
      case 8: { max = 31; break };
      case 9: { max = 30; break };
      case 10: { max = 31; break };
      case 11: { max = 30; break };
      case 12: { max = 31; break };
      default: return;
    };
    for (let i = 0; i < 7; i++) {
      let dia = currentDay + i;
      if (dia > max) dia = dia - max;
      days.push(dia);
    }
    setDias(days);
  }, []);

  return (
    <>
      <Reservas
        type={"bar"}
        days={dias}
        mes={mes}
        hours={[
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
          '00:00',
          '01:00'
        ]}
        max={max}
        options={Array.from({ length: 30 }, (_, i) => i + 1)}
      />
    </>
  )
}

export default Page;
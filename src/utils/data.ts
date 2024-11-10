const services = [
    {
        title: "Step 1: Share Property Information",
        description: "Fill out our simple form with details about your property. There’s no obligation to sell, just let us know it's available, and we’ll get in touch!",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h6" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.387 0 .748 .11 1.054 .3" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
</svg>`,
    },
    {
        title: "Step 2: Property Assessment",
        description: "We’ll arrange a visit—either in person or virtually—to assess your property and discuss potential offers.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
  <path d="M9 4v13" />
  <path d="M15 7v13" />
</svg>`,
    },
    {
        title: "Step 3: Receive and Accept an Offer",
        description: "Once you agree to the offer, we’ll work with you to schedule a closing date that fits your timeline. We handle all paperwork for a hassle-free process!",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M11 15h1" />
  <path d="M12 15v3" />
</svg>`,
    },
];




const icons = [
    {
        title: "No Repairs Needed",
        description: "We buy homes in any condition. There’s no need to worry about paying for costly repairs or updates.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-axe">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M13 9l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
  <path d="M6.66 15.66l-3.32 -3.32a1.25 1.25 0 0 1 .42 -2.044l3.24 -1.296l6 -6l3 3l-6 6l-1.296 3.24a1.25 1.25 0 0 1 -2.044 .42z" />
</svg>`,
    },
    {
        title: "Get more Cash",
        description: "We’ll send you a cash offer from top home buyers in your area, getting you the best value for your home.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cash">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
  <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
</svg>`,
    },
    {
        title: "No Commissions",
        description: "No need to pay for out of pocket agent fees and commissions. Our offers are cash, allowing you to sell quickly.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-manual-gearbox">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 8l0 8" />
  <path d="M12 8l0 8" />
  <path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
</svg>`,
    },
    {
        title: "Cash offer in 24 hours",
        description: "After you submit the survey above we will be contacting you within 24 hours with a cash offer for your home.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-hours-24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
  <path d="M4 5v4h4" />
  <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
  <path d="M18 15v2a1 1 0 0 0 1 1h1" />
  <path d="M21 15v6" />
</svg>`,
    },
];

export const iconUser = `
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>`

export const iconPhone = `
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
</svg>`

export const iconEmail = `
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
  <path d="M3 7l9 6l9 -6" />
</svg>`

export const iconText = `
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-text-wrap">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6l16 0" />
  <path d="M4 18l5 0" />
  <path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" />
</svg>`


export { services, icons };

import {useEffect,useState} from 'react';
import {Brain,Network,Workflow,TrendingUp,MessageCircle,GraduationCap,Baby,Users,Wifi,Leaf,ShieldCheck,BarChart3,Mail,Phone,Globe2,ArrowRight,Handshake,Video,ChevronRight} from 'lucide-react';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const products=[
 {id:'talker',name:'Talker',desc:'Communication, messaging, video & conference calls',Icon:MessageCircle,image:'/vynorqa-hero.png',pos:'8% 68%'},
 {id:'scholar',name:'Scholar Solver AI',desc:'AI assistance for university students',Icon:GraduationCap,image:'/vynorqa-hero.png',pos:'27% 68%'},
 {id:'edukids',name:'EduKids',desc:'Interactive education for children',Icon:Baby,image:'/vynorqa-hero.png',pos:'46% 68%'},
 {id:'smiley',name:'Smiley',desc:'Social networking and digital communities',Icon:Users,image:'/vynorqa-hero.png',pos:'65% 68%'},
 {id:'strata',name:'Strata',desc:'Digital data vending and connectivity services',Icon:Wifi,image:'/vynorqa-hero.png',pos:'81% 68%'},
 {id:'farmhub',name:'Farm Hub AI',desc:'AI-powered tools for farmers',Icon:Leaf,image:'/vynorqa-hero.png',pos:'95% 68%'}
];
const pillars=[['AI First','Intelligence built into every product.',Brain],['Connected Ecosystem','Products designed to work together.',Network],['Automation','Reduce repetitive work through intelligent systems.',Workflow],['Scalable Technology','Built to grow from local to international markets.',TrendingUp]];

function Typewriter({text,speed=34}:{text:string,speed?:number}){const[out,setOut]=useState('');useEffect(()=>{setOut('');let i=0;const id=setInterval(()=>{i++;setOut(text.slice(0,i));if(i>=text.length)clearInterval(id)},speed);return()=>clearInterval(id)},[text,speed]);return <>{out}<span className="typing-cursor"/></>}

export default function Home(){return <div className="min-h-screen bg-[#020817] text-white overflow-hidden">
<header className="sticky top-0 z-50 bg-[#020817]/90 backdrop-blur-xl border-b border-cyan-400/10"><div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between"><a href="#home" className="flex items-center gap-3"><img src="/vynorqa-logo.jpeg" className="h-14 w-14 rounded-xl object-cover"/><div><b className="text-2xl">Vynorqa</b><div className="text-[9px] tracking-[.22em] text-slate-400 uppercase">Innovation today • A smarter tomorrow</div></div></a><nav className="hidden lg:flex gap-7 text-sm text-slate-300"><a href="#home">Home</a><a href="#about">About</a><a href="#technology">AI Technology</a><a href="#products">Products</a><a href="#innovation">Innovation</a><a href="#partnerships">Partnerships</a><a href="#contact">Contact</a></nav><a href="#contact" className="neo-btn">Get in Touch</a></div></header>

<section id="home" className="relative min-h-[760px] flex items-center border-b border-cyan-400/10 overflow-hidden bg-[#020817]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(26,213,255,.14),transparent_30%),radial-gradient(circle_at_82%_58%,rgba(159,37,255,.12),transparent_26%)]"/>
  <div className="relative max-w-7xl mx-auto px-5 py-20 w-full grid lg:grid-cols-[.92fr_1.08fr] gap-10 items-center">
    <div className="max-w-xl">
      <p className="eyebrow">Innovation today • A smarter tomorrow</p>
      <h1 className="text-6xl md:text-8xl font-black tracking-tight">Vynorqa</h1>
      <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight min-h-[116px]"><Typewriter text="Building intelligent technology for a connected future."/></h2>
      <p className="text-lg text-slate-200 mt-6 max-w-xl min-h-[92px]"><Typewriter text="AI-powered digital products solving real-world challenges in communication, education, social platforms, agriculture and digital services across Africa and beyond." speed={18}/></p>
      <div className="flex flex-wrap gap-4 mt-8"><a href="#technology" className="neo-btn">Explore Our Technology <ArrowRight size={17}/></a><a href="#products" className="outline-btn">Our Products <ArrowRight size={17}/></a></div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 text-sm text-slate-200"><div>🧠 AI Powered Solutions</div><div>🌍 Built for Africa & Beyond</div><div>👥 People Focused</div><div>📈 A Smarter Tomorrow</div></div>
    </div>
    <div className="relative hidden lg:block h-[560px] overflow-hidden">
      <div className="absolute inset-0 rounded-[32px] overflow-hidden">
        <img src="/vynorqa-hero.png" className="absolute top-[-6%] left-[-43%] w-[146%] max-w-none h-auto" alt="Vynorqa AI visual"/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#020817]/20 pointer-events-none"/>
      {products.map((p,i)=>{const pos=[[3,11],[66,8],[1,38],[71,37],[6,67],[67,66]][i];return <a href={'#product-'+p.id} key={p.id} className="hero-product bg-[#061127]/65 overflow-hidden group" style={{left:pos[0]+'%',top:pos[1]+'%',animationDelay:(i*.23)+'s',minWidth:'150px'}}>
        <div className="relative flex items-center gap-2"><p.Icon size={24}/><span>{p.name}</span></div>
      </a>})}
    </div>
  </div>
</section>

<section id="products" className="py-12 md:py-14 bg-[#040b1c] border-b border-cyan-400/10"><div className="max-w-7xl mx-auto px-5"><div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"><div><p className="eyebrow">Our products</p><h2 className="text-4xl md:text-5xl font-black mt-2">An Ecosystem for a <span className="gradient-text">Smarter Tomorrow</span></h2></div><div className="lg:text-right"><p className="text-slate-300 max-w-xl">Six powerful products. One intelligent ecosystem.<br/>Transforming lives through technology.</p><a href="#contact" className="outline-btn mt-4">Explore All Products <ArrowRight size={16}/></a></div></div><div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-3 mt-8">{products.map((p,i)=><article id={'product-'+p.id} className="glass-card product-card scroll-mt-28 !p-0 min-h-[250px] flex flex-col overflow-hidden" key={p.name}>
  <div className="h-36 relative overflow-hidden border-b border-cyan-300/10">
    <div className="absolute inset-0 scale-[2.05]" style={{backgroundImage:'url(/vynorqa-hero.png)',backgroundSize:'760px auto',backgroundPosition:p.pos}}/>
    <div className="absolute inset-0 bg-gradient-to-t from-[#061127] via-transparent to-transparent"/>
    <div className="absolute right-3 top-3 icon-orb animate-float" style={{animationDelay:(i*.18)+'s'}}><p.Icon/></div>
  </div>
  <div className="p-4 flex flex-col flex-1">
    <h3 className="text-lg font-bold">{p.name}</h3>
    <p className="text-slate-400 mt-2 text-sm">{p.desc}</p>
    <a href="#contact" className="inline-flex items-center gap-2 mt-auto pt-5 text-cyan-300 font-semibold text-sm">Explore <ChevronRight size={15}/></a>
  </div>
</article>)}</div></div></section>

<section id="about" className="section"><div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center"><div><p className="eyebrow">About Vynorqa</p><h2 className="heading">Technology built around <span className="gradient-text">real human needs.</span></h2></div><p className="copy">Vynorqa develops AI-powered digital products designed to solve problems in communication, education, social platforms, agriculture and digital services. Our ecosystem connects intelligent tools with practical everyday experiences for people, businesses and communities.</p></div></section>

<section id="technology" className="section bg-[#050d22]"><div className="max-w-7xl mx-auto px-5"><p className="eyebrow">Vynorqa AI Core</p><h2 className="heading">One intelligence layer. <span className="gradient-text">Six powerful capabilities.</span></h2><div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-10">{[['Intelligence',Brain],['Automation',Workflow],['Personalization',Users],['Analytics',BarChart3],['Security',ShieldCheck],['Business Operations',TrendingUp]].map(([t,I]:any,i)=><a href="#innovation" className="glass-card text-center product-card" key={t}><I className="mx-auto text-cyan-300 animate-float" style={{animationDelay:(i*.15)+'s'}}/><b className="block mt-4">{t}</b></a>)}</div></div></section>

<section className="py-12 bg-[#061127] border-b border-blue-500/10 relative overflow-hidden"><div className="absolute right-0 inset-y-0 w-[34%] opacity-35 bg-cover bg-center" style={{backgroundImage:'url(/vynorqa-hero.png)',backgroundPosition:'88% 94%'}}/><div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.05fr_3fr] gap-8 items-center"><div><p className="eyebrow">Why Vynorqa</p><h2 className="text-4xl font-black mt-3">Intelligent Solutions<br/>for <span className="gradient-text">Real Impact</span></h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">{pillars.map(([t,d,I]:any,i)=><div className="glass-card" key={t}><I className="text-fuchsia-400 animate-float" style={{animationDelay:(i*.18)+'s'}}/><h3 className="text-xl font-bold mt-4">{t}</h3><p className="text-slate-400 mt-2">{d}</p></div>)}</div></div></section>

<section className="section bg-[#050d22]"><div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center"><div className="rounded-3xl min-h-[390px] bg-gradient-to-br from-cyan-500/20 via-blue-700/10 to-fuchsia-500/20 border border-cyan-300/20 grid place-items-center p-10"><div className="text-center"><Brain size={76} className="mx-auto text-cyan-300"/><p className="eyebrow mt-6">Founder / Vision</p><p className="text-2xl md:text-3xl font-semibold leading-relaxed">“We are building technology that doesn't simply respond to people — it understands what they need and helps them get it done.”</p></div></div><div><p className="eyebrow">Our Vision</p><h2 className="heading">African innovation with <span className="gradient-text">global ambition.</span></h2><p className="copy">Vynorqa is creating a connected technology ecosystem that can scale with the people and markets it serves. The founder portrait can be added here once supplied.</p></div></div></section>

<section id="innovation" className="section"><div className="max-w-7xl mx-auto px-5"><p className="eyebrow">Vynorqa AI Command Center</p><h2 className="heading">See the ecosystem <span className="gradient-text">as one intelligent operation.</span></h2><div className="command mt-10"><div className="text-center"><Brain size={45} className="mx-auto text-cyan-300 animate-float"/><b className="text-2xl block mt-2">Vynorqa AI Core</b></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">{products.map(p=><a href={'#product-'+p.id} className="mini" key={p.name}>{p.name}</a>)}</div><div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">{['Users','Revenue','System Health','AI Activity','Customer Support','Product Analytics','Payments','Security Alerts'].map(x=><div className="metric" key={x}><span className="text-slate-400 text-xs">{x}</span><b className="block mt-1 text-cyan-300">Live</b></div>)}</div></div></div></section>

<section id="partnerships" className="section bg-[#050d22]"><div className="max-w-5xl mx-auto px-5 text-center"><Handshake size={48} className="mx-auto text-fuchsia-400"/><p className="eyebrow mt-5">Partnerships</p><h2 className="heading">Let's build the <span className="gradient-text">future together.</span></h2><div className="flex flex-wrap justify-center gap-3 mt-7"><a href="mailto:info@vynorqa.co.zw?subject=Partner%20with%20Vynorqa" className="neo-btn">Partner with Vynorqa</a><a href="mailto:info@vynorqa.co.zw?subject=Business%20Enquiry" className="outline-btn">Business Enquiries</a><a href="mailto:info@vynorqa.co.zw?subject=Technology%20Partnership" className="outline-btn">Technology Partnerships</a></div></div></section>

<section id="contact" className="section"><div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10"><div><p className="eyebrow">Contact</p><h2 className="heading">Start a conversation.</h2><div className="space-y-4 text-slate-300"><a className="contact" href="tel:+263714907480"><Phone/> +263 714 907 480</a><a className="contact" href="mailto:info@vynorqa.co.zw"><Mail/> info@vynorqa.co.zw</a><a className="contact" href="https://www.vynorqa.co.zw" target="_blank" rel="noreferrer"><Globe2/> www.vynorqa.co.zw</a></div></div><form className="glass-card grid gap-4" onSubmit={e=>{e.preventDefault();window.location.href='mailto:info@vynorqa.co.zw?subject=Website%20Enquiry'}}><input className="field" placeholder="Your name" required/><input className="field" type="email" placeholder="Email address" required/><select className="field"><option>Business enquiry</option><option>Partnership</option><option>Technology partnership</option><option>Product enquiry</option></select><textarea className="field min-h-32" placeholder="Tell us how we can help" required/><button className="neo-btn justify-center">Send Enquiry</button></form></div></section>
<footer className="border-t border-cyan-300/10 py-10"><div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row gap-5 justify-between"><div><b className="text-2xl">VYNORQA</b><p className="text-slate-400">Intelligence. Innovation. Impact.</p></div><p className="text-slate-500"><a href="#products">Products</a> | <a href="#about">About</a> | <a href="#technology">Technology</a> | <a href="#partnerships">Partnerships</a> | <a href="#contact">Contact</a><br/>© 2026 Vynorqa. All rights reserved.</p></div></footer>
<FloatingWhatsApp/>
</div>}
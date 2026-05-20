import React, { useState, useEffect } from "react";

/* ============================================================
   TriggerX — Interactive Outbound Engine Demo
   Light corporate theme. 11-stage prospect walkthrough.
   Single-file artifact, self-contained (logo inlined).
   ============================================================ */

const LOGO = "data:image/png;base64,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";

const NAVY="#0E1B33", INK="#1B2A4A", ACCENT="#1F6FEB", ACCENT_DK="#1657c4";
const SIGNAL="#E4572E", GOOD="#16A34A", WARN="#D97706", BAD="#DC2626";
const PAGE="#F4F6FA", CARD="#FFFFFF", LINE="#E2E7F0", MUTE="#5C6B85";

const STAGES=[
  "Define ICP & TAM","Signal-Based Sourcing","Clean & Verify","ICP Fit Scoring",
  "Buying-Signal Intelligence","Personalized Icebreakers","Deliverability Infrastructure",
  "Inbox Health Monitoring","Multi-Channel Outreach","Booked Appointments","Pipeline CRM"
];

/* ---------- ICP parsing so input carries through ---------- */
function parseICP(text){
  const t=(text||"").toLowerCase();
  let industry="B2B services", noun="companies";
  const map=[
    ["freight","freight & logistics","brokerages"],["logistic","freight & logistics","brokerages"],
    ["insur","insurance","agencies"],["saas","SaaS","companies"],["software","software","companies"],
    ["manufactur","manufacturing","manufacturers"],["construct","construction","firms"],
    ["health","healthcare","providers"],["real estate","real estate","firms"],
    ["market","marketing services","agencies"],["recruit","recruiting","firms"],
    ["finance","financial services","firms"],["ecommerce","eCommerce","brands"]
  ];
  for(const[k,v,n] of map){ if(t.includes(k)){industry=v;noun=n;break;} }
  let geo="the United States";
  if(t.includes("canad"))geo="Canada";
  if(t.includes("uk")||t.includes("united kingdom"))geo="the United Kingdom";
  if(t.includes("europe"))geo="Europe";
  if(t.includes("australia"))geo="Australia";
  let size="mid-market";
  if(t.includes("enterprise"))size="enterprise";
  if(t.includes("smb")||t.includes("small"))size="SMB";
  return {industry,noun,geo,size,raw:text};
}

/* ---------- shared UI ---------- */
const Btn=({children,onClick,kind="primary",disabled})=>{
  const base={border:"none",cursor:disabled?"not-allowed":"pointer",fontWeight:600,
    fontSize:15,padding:"13px 26px",borderRadius:10,fontFamily:"inherit",
    transition:"transform .08s ease",display:"inline-flex",alignItems:"center",
    gap:8,opacity:disabled?.45:1};
  const s={
    primary:{...base,background:ACCENT,color:"#fff",boxShadow:"0 6px 18px rgba(31,111,235,.28)"},
    ghost:{...base,background:"transparent",color:ACCENT,border:"1.5px solid "+ACCENT}
  };
  return <button style={s[kind]} onClick={disabled?undefined:onClick}
    onMouseDown={e=>!disabled&&(e.currentTarget.style.transform="translateY(1px)")}
    onMouseUp={e=>e.currentTarget.style.transform="translateY(0)"}
    onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>{children}</button>;
};

const Panel=({title,children,style})=>(
  <div style={{background:CARD,border:"1px solid "+LINE,borderRadius:14,padding:22,...style}}>
    {title&&<div style={{fontSize:12,fontWeight:700,letterSpacing:".09em",
      textTransform:"uppercase",color:MUTE,marginBottom:16}}>{title}</div>}
    {children}
  </div>
);

const Stat=({value,label,color=NAVY,sub})=>(
  <div style={{background:PAGE,border:"1px solid "+LINE,borderRadius:12,
    padding:"20px 16px",textAlign:"center",flex:1,minWidth:0}}>
    <div style={{fontSize:28,fontWeight:800,color,lineHeight:1.05}}>{value}</div>
    <div style={{fontSize:12.5,fontWeight:600,color:INK,marginTop:6}}>{label}</div>
    {sub&&<div style={{fontSize:11,color:MUTE,marginTop:4,lineHeight:1.4}}>{sub}</div>}
  </div>
);

const Bar=({pct,color})=>(
  <div style={{background:"#EAEEF5",borderRadius:99,height:7,overflow:"hidden"}}>
    <div style={{width:pct+"%",height:"100%",background:color,borderRadius:99,
      transition:"width .9s ease"}}/>
  </div>
);

const Pill=({children,bg,fg})=>(
  <span style={{background:bg,color:fg,fontSize:11,fontWeight:700,padding:"3px 9px",
    borderRadius:99,whiteSpace:"nowrap"}}>{children}</span>
);

const Tag=({children})=>(
  <span style={{background:"#EEF3FF",color:ACCENT_DK,fontSize:11,fontWeight:600,
    padding:"4px 10px",borderRadius:6,marginRight:6}}>{children}</span>
);

const Head=({title,sub})=>(
  <div style={{textAlign:"center",marginBottom:24}}>
    <h2 style={{margin:0,fontSize:29,fontWeight:800,color:NAVY,letterSpacing:"-.02em"}}>{title}</h2>
    <p style={{margin:"9px auto 0",maxWidth:560,fontSize:14.5,color:MUTE,lineHeight:1.55}}>{sub}</p>
  </div>
);

const Check=()=>(
  <span style={{display:"inline-flex",width:18,height:18,borderRadius:5,background:GOOD,
    color:"#fff",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900}}>&#10003;</span>
);

const Grid2=({children})=>(
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>{children}</div>
);

/* ============================================================
   STAGES
   ============================================================ */

function S0({icp,setText,text,go}){
  return(
    <div>
      <Head title="Start With Your Ideal Customer"
        sub="Tell us who you sell to in plain English. We translate it into a precise, structured targeting brief. Blueprint the entire engine is built on."/>
      <Panel title="Describe Your Ideal Client Profile">
        <textarea value={text} onChange={e=>setText(e.target.value)}
          placeholder="e.g. Mid-market freight brokerages in the United States. Decision-makers should be owners, VP of Sales, or Operations directors. Bonus if they are hiring or have recently expanded."
          style={{width:"100%",minHeight:120,resize:"vertical",border:"1px solid "+LINE,
            borderRadius:10,padding:14,fontSize:14,fontFamily:"inherit",color:INK,
            outline:"none",boxSizing:"border-box",lineHeight:1.5}}/>
        <div style={{marginTop:16,display:"flex",justifyContent:"center"}}>
          <Btn onClick={go} disabled={!text.trim()}>Build My Engine &rarr;</Btn>
        </div>
      </Panel>
      <div style={{marginTop:14,fontSize:12.5,color:MUTE,textAlign:"center"}}>
        Industry detected: <b style={{color:INK}}>{icp.industry}</b>
      </div>
    </div>
  );
}

function S1({icp}){
  return(
    <div>
      <Head title="Signal-Based Lead Sourcing"
        sub={"We don't buy stale lists. We scrape a live, total-addressable map of "+icp.industry+" "+icp.noun+" in "+icp.geo+". Built fresh against your brief."}/>
      <div style={{display:"flex",gap:16,marginBottom:16}}>
        <Stat value="11,840" label="Accounts Mapped" color={ACCENT} sub="Total addressable market"/>
        <Stat value="38" label="Data Points / Record" sub="Firmographic + contact + signal"/>
        <Stat value="100%" label="Sourced To Brief" sub="No generic list buys"/>
      </div>
      <Panel title={"Sample Record: "+icp.industry}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px 20px",
          fontSize:13,fontFamily:"ui-monospace,Menlo,monospace"}}>
          <div><span style={{color:MUTE}}>name:</span> <b style={{color:INK}}>"Travis Sharpe"</b></div>
          <div><span style={{color:MUTE}}>title:</span> <b style={{color:INK}}>"VP Operations"</b></div>
          <div><span style={{color:MUTE}}>company:</span> <b style={{color:INK}}>"Northwind Group"</b></div>
          <div><span style={{color:MUTE}}>employees:</span> <b style={{color:INK}}>"180"</b></div>
          <div><span style={{color:MUTE}}>region:</span> <b style={{color:INK}}>"{icp.geo}"</b></div>
          <div><span style={{color:MUTE}}>signal:</span> <b style={{color:SIGNAL}}>"hiring +3 ops roles"</b></div>
        </div>
      </Panel>
    </div>
  );
}

function S2(){
  return(
    <div>
      <Head title="Clean & Verify the Dataset"
        sub="Raw scrape data is messy. An automated cleaning layer normalizes every field, removes duplicates, and maps records into a consistent, CRM-ready structure."/>
      <Grid2>
        <Panel title="Before: Raw Capture" style={{borderColor:"#F3D6D2"}}>
          <pre style={{margin:0,fontSize:12.5,color:BAD,fontFamily:"ui-monospace,monospace",
            lineHeight:1.9,whiteSpace:"pre-wrap"}}>{`job_title_1: "VP, Operations"
job_title_2: "VP Ops"
company_legal: "Northwind Group LLC"
company_dba:   "Northwind"
email_a: "travis@nwind.co"
email_b: "t.sharpe@nwind.co"`}</pre>
        </Panel>
        <Panel title="After: Clean & Structured" style={{borderColor:"#CFE8D6"}}>
          <pre style={{margin:0,fontSize:12.5,color:GOOD,fontFamily:"ui-monospace,monospace",
            lineHeight:1.9,whiteSpace:"pre-wrap"}}>{`title:      "VP Operations"
department: "Operations"
seniority:  "VP"
company:    "Northwind Group"
email:      "t.sharpe@nwind.co"
verified:   true   ·   confidence: 0.96`}</pre>
        </Panel>
      </Grid2>
      <div style={{marginTop:16,background:"#EAF6EE",border:"1px solid #CFE8D6",
        borderRadius:12,padding:"14px 18px",display:"flex",alignItems:"center",gap:10}}>
        <Check/>
        <span style={{fontSize:13.5,color:INK}}>
          Cleaning complete. <b>11,840 raw records</b> consolidated to{" "}
          <b style={{color:GOOD}}>6,210 verified, deduplicated leads</b> ready for scoring.
        </span>
      </div>
    </div>
  );
}

function S3(){
  const rows=[
    {n:"Travis Sharpe",r:"VP Operations · Northwind Group",s:94,t:"Tier 1"},
    {n:"Maria Delgado",r:"Owner · Castlepoint Logistics",s:88,t:"Tier 1"},
    {n:"Devin Cole",r:"Director of Sales · Apex Freight",s:71,t:"Tier 2"},
    {n:"Priya Raman",r:"Ops Manager · Linehaul Co",s:58,t:"Tier 3"},
    {n:"Jordan Wells",r:"Marketing Lead · Cargo Plus",s:34,t:"Filtered"},
  ];
  const tcol={"Tier 1":GOOD,"Tier 2":ACCENT,"Tier 3":WARN,"Filtered":MUTE};
  return(
    <div>
      <Head title="ICP Fit Scoring"
        sub="Every lead is scored 0 to 100 against your brief. The score sets the channel mix, so spend goes where intent is highest, not spread evenly across a cold list."/>
      <div style={{display:"flex",gap:12,marginBottom:18}}>
        {[
          {t:"Tier 1: Score 80+",d:"Email + LinkedIn + Phone",c:GOOD},
          {t:"Tier 2: Score 50 to 79",d:"Email + LinkedIn",c:ACCENT},
          {t:"Tier 3: Score under 50",d:"Email only",c:WARN},
        ].map((x,i)=>(
          <div key={i} style={{flex:1,background:CARD,border:"1px solid "+LINE,
            borderRadius:12,padding:"14px 16px",borderTop:"3px solid "+x.c}}>
            <div style={{fontSize:13,fontWeight:800,color:NAVY}}>{x.t}</div>
            <div style={{fontSize:12,color:MUTE,marginTop:4}}>{x.d}</div>
          </div>
        ))}
      </div>
      <Panel title="Sample Scoring Output">
        {rows.map((r,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:14,
            padding:"11px 0",borderBottom:i<rows.length-1?"1px solid "+LINE:"none",
            opacity:r.t==="Filtered"?.5:1}}>
            <div style={{flex:1}}>
              <div style={{fontSize:14,fontWeight:700,color:NAVY}}>{r.n}</div>
              <div style={{fontSize:12,color:MUTE}}>{r.r}</div>
            </div>
            <div style={{width:130}}><Bar pct={r.s} color={tcol[r.t]}/></div>
            <div style={{width:34,fontSize:14,fontWeight:800,color:tcol[r.t]}}>{r.s}</div>
            <div style={{width:78,textAlign:"right"}}>
              <Pill bg={tcol[r.t]+"1A"} fg={tcol[r.t]}>{r.t}</Pill>
            </div>
          </div>
        ))}
        <div style={{marginTop:14,textAlign:"center",fontSize:13.5,color:INK}}>
          <b style={{color:GOOD,fontSize:18}}>4,120</b> qualified leads scored into channel tiers
        </div>
      </Panel>
    </div>
  );
}

function S4({icp}){
  return(
    <div>
      <Head title="Buying-Signal Intelligence"
        sub="We layer real-time intent on top of fit. The engine watches for the moments that mean a company just became ready to buy, and prioritizes those accounts."/>
      <Grid2>
        <Panel title="Signals We Track">
          {[
            ["Hiring activity","New roles that imply growth or budget"],
            ["Funding & investment","Fresh capital, new contracts"],
            ["Expansion","New locations, markets, or verticals"],
            ["Leadership changes","New decision-maker in seat"],
            ["Reputation signals","New Google / Yelp review velocity"],
          ].map((x,i)=>(
            <div key={i} style={{display:"flex",gap:11,padding:"9px 0",
              borderBottom:i<4?"1px solid "+LINE:"none"}}>
              <span style={{width:9,height:9,borderRadius:9,background:SIGNAL,
                marginTop:5,flexShrink:0}}/>
              <div>
                <div style={{fontSize:13.5,fontWeight:700,color:NAVY}}>{x[0]}</div>
                <div style={{fontSize:12,color:MUTE}}>{x[1]}</div>
              </div>
            </div>
          ))}
        </Panel>
        <Panel title="Live Intelligence: Northwind Group">
          {[
            ["HIRING",SIGNAL,"Posted 3 operations roles in the last 30 days. Signals a growth phase and active budget."],
            ["EXPANSION",ACCENT,"Announced a new regional terminal, which means new capacity to fill and a new buying need."],
            ["LEADERSHIP",GOOD,"New VP of Operations started 6 weeks ago, with a fresh mandate and openness to new vendors."],
          ].map((x,i)=>(
            <div key={i} style={{marginBottom:i<2?14:0}}>
              <div style={{fontSize:11,fontWeight:800,color:x[1],letterSpacing:".06em"}}>{x[0]}</div>
              <div style={{fontSize:12.5,color:INK,marginTop:3,lineHeight:1.5}}>{x[2]}</div>
            </div>
          ))}
        </Panel>
      </Grid2>
    </div>
  );
}

function S5(){
  const ice=[
    {p:"Travis Sharpe · Northwind Group",
     l:"Congrats on the new terminal opening, Travis. Filling that capacity is the fun part and the hard part.",
     b:"Based on: expansion announcement + ops hiring"},
    {p:"Maria Delgado · Castlepoint Logistics",
     l:"Looks like Castlepoint is hiring a few dispatchers right now. Usually means freight volume is moving in the right direction.",
     b:"Based on: 4 open dispatch roles on careers page"},
    {p:"Devin Cole · Apex Freight",
     l:"Your customers keep mentioning how fast Apex turns loads around. That reputation is worth protecting as you grow.",
     b:"Based on: recent Google review themes"},
  ];
  return(
    <div>
      <Head title="Personalized Icebreakers"
        sub="The intelligence becomes the opening line. Every prospect gets a custom first sentence tied to something specific and true, so a cold email reads warm."/>
      {ice.map((x,i)=>(
        <Panel key={i} style={{marginBottom:12}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontSize:12.5,fontWeight:700,color:MUTE}}>{x.p}</div>
            <Pill bg="#EEF3FF" fg={ACCENT_DK}>Generated</Pill>
          </div>
          <div style={{fontSize:14.5,color:NAVY,fontWeight:600,margin:"10px 0 8px",
            lineHeight:1.55,fontStyle:"italic"}}>&ldquo;{x.l}&rdquo;</div>
          <div style={{fontSize:11.5,color:MUTE}}>{x.b}</div>
        </Panel>
      ))}
    </div>
  );
}

function S6(){
  const boxes=[
    "Dedicated sending domains, so your primary domain is never at risk",
    "Google and Microsoft mailboxes, provisioned and warmed before use",
    "Triple email verification, each address checked three times",
    "SPF, DKIM and DMARC, fully authenticated on every domain",
    "Spam-content checks, every send screened before it goes out",
    "Volume guardrails, capped daily sends to protect reputation",
  ];
  return(
    <div>
      <Head title="Deliverability Infrastructure"
        sub="Most cold outreach fails before it is read. We build the sending infrastructure so your messages land in the primary inbox, not spam, not promotions."/>
      <Grid2>
        <Panel title="Infrastructure Setup">
          {boxes.map((b,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"9px 0",
              borderBottom:i<boxes.length-1?"1px solid "+LINE:"none"}}>
              <Check/>
              <span style={{fontSize:13,color:INK,lineHeight:1.45}}>{b}</span>
            </div>
          ))}
        </Panel>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <Stat value="97%+" label="Inbox Placement Rate" color={GOOD}
            sub="Primary inbox, authenticated sending"/>
          <Stat value="<2%" label="Spam / Bounce Rate" color={ACCENT}
            sub="Triple-verified contacts only"/>
          <div style={{background:"#EAF6EE",border:"1px solid #CFE8D6",borderRadius:12,
            padding:"14px 16px",display:"flex",gap:10,alignItems:"center"}}>
            <Check/>
            <span style={{fontSize:13,color:INK}}>
              Campaign infrastructure ready. verified leads cleared for delivery.
            </span>
          </div>
        </div>
      </Grid2>
    </div>
  );
}

function S7(){
  const rows=[
    {d:"outreach@trigger-x-mail.com",h:100,s:"Healthy"},
    {d:"hello@trigger-x-mail.com",h:98,s:"Healthy"},
    {d:"team@trigger-x-send.com",h:97,s:"Healthy"},
    {d:"contact@trigger-x-send.com",h:94,s:"Healthy"},
    {d:"intro@trigger-x-reach.com",h:92,s:"Healthy"},
    {d:"connect@trigger-x-reach.com",h:66,s:"Cooling Down"},
    {d:"sales@trigger-x-send.com",h:61,s:"Cooling Down"},
    {d:"hi@trigger-x-mail.com",h:43,s:"Re-warming"},
    {d:"reach@trigger-x-reach.com",h:38,s:"Re-warming"},
  ];
  const col={"Healthy":GOOD,"Cooling Down":WARN,"Re-warming":BAD};
  return(
    <div>
      <Head title="Inbox Health Monitoring"
        sub="Deliverability is not set-and-forget. Every mailbox is monitored continuously. Under-performing inboxes are rested and re-warmed automatically before they cost you."/>
      <Panel title="Mailbox Health: Sample of 50 Monitored">
        {rows.map((r,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"11px 0",
            borderBottom:i<rows.length-1?"1px solid "+LINE:"none"}}>
            <div style={{flex:1,fontSize:13,color:INK,fontFamily:"ui-monospace,monospace"}}>{r.d}</div>
            <div style={{width:120}}><Bar pct={r.h} color={col[r.s]}/></div>
            <div style={{width:38,fontSize:13,fontWeight:800,color:col[r.s]}}>{r.h}%</div>
            <div style={{width:104,textAlign:"right"}}>
              <Pill bg={col[r.s]+"1A"} fg={col[r.s]}>{r.s}</Pill>
            </div>
          </div>
        ))}
      </Panel>
      <div style={{display:"flex",gap:12,marginTop:14}}>
        <Stat value="40 Healthy" label="Sending at full volume" color={GOOD}/>
        <Stat value="5 Resting" label="Reduced volume 48h" color={WARN}/>
        <Stat value="5 Re-warming" label="Automated recovery" color={BAD}/>
      </div>
    </div>
  );
}

function S8(){
  const seq=[
    ["Day 1","Email","Personalized cold email with custom icebreaker",ACCENT],
    ["Day 2","LinkedIn","Connection request, no pitch",NAVY],
    ["Day 4","Call","Signal-based call for Tier 1 leads",SIGNAL],
    ["Day 6","Email","Follow-up, new angle, social proof",ACCENT],
    ["Day 8","LinkedIn","Message referencing the email thread",NAVY],
    ["Day 11","Call","Second touch, book the meeting",SIGNAL],
  ];
  return(
    <div>
      <Head title="Multi-Channel Outreach Execution"
        sub="One coordinated sequence across email, LinkedIn, and phone. Channels reinforce each other. Tier 1 leads get all three, so the same prospect is reached the way they respond best."/>
      <Grid2>
        <Panel title="Sequence: Tier 1 Lead">
          {seq.map((x,i)=>(
            <div key={i} style={{display:"flex",gap:12,padding:"9px 0",
              borderBottom:i<seq.length-1?"1px solid "+LINE:"none"}}>
              <div style={{width:46,fontSize:11,fontWeight:800,color:MUTE}}>{x[0]}</div>
              <Pill bg={x[3]+"18"} fg={x[3]}>{x[1]}</Pill>
              <span style={{fontSize:12.5,color:INK,flex:1,lineHeight:1.4}}>{x[2]}</span>
            </div>
          ))}
        </Panel>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <Stat value="4,120" label="Prospects In Sequence" color={ACCENT}/>
          <Stat value="9,800+" label="Touches Scheduled / Month" sub="Email + LinkedIn + phone"/>
          <Stat value="3-Channel" label="Coordinated Cadence" color={SIGNAL}
            sub="Each channel reinforces the others"/>
        </div>
      </Grid2>
    </div>
  );
}

function S9(){
  return(
    <div>
      <Head title="The Cold Email That Goes Out"
        sub="Here is what a finished, personalized message looks like, built from the scraped intelligence, structured and tested for replies, not for word count."/>
      <Grid2>
        <Panel title="Email Preview">
          <div style={{fontSize:12,color:MUTE,marginBottom:6}}>Subject</div>
          <div style={{fontSize:14,fontWeight:700,color:NAVY,marginBottom:14}}>
            Quick one re: the new Northwind terminal
          </div>
          <div style={{fontSize:13,color:INK,lineHeight:1.65}}>
            <p style={{margin:"0 0 10px"}}>Hi Travis,</p>
            <div style={{background:"#EEF3FF",borderLeft:"3px solid "+ACCENT,
              padding:"8px 12px",borderRadius:"0 6px 6px 0",margin:"0 0 10px",fontStyle:"italic"}}>
              Congrats on the new terminal opening, Travis. Filling that capacity is the fun part and the hard part.
            </div>
            <p style={{margin:"0 0 10px"}}>
              New capacity usually means a scramble for consistent freight to fill it. We build outbound
              systems that book qualified shipper conversations on a predictable schedule.
            </p>
            <div style={{background:"#EAF6EE",borderLeft:"3px solid "+GOOD,
              padding:"8px 12px",borderRadius:"0 6px 6px 0",margin:"0 0 10px"}}>
              Worth a quick look at whether this could fill the new terminal faster?
            </div>
            <p style={{margin:0}}>Best,<br/>Ashir</p>
          </div>
        </Panel>
        <Panel title="Why This Email Works">
          {[
            ["Personalized opening","First line built from a real, current event, not a template."],
            ["Specific value","Ties their exact situation to a clear outcome."],
            ["Soft CTA","Invites a conversation instead of demanding a meeting."],
            ["Reply-tested structure","Length and framing modeled on what gets responses."],
          ].map((x,i)=>(
            <div key={i} style={{marginBottom:i<3?14:0}}>
              <div style={{fontSize:13,fontWeight:800,color:ACCENT_DK}}>{x[0]}</div>
              <div style={{fontSize:12.5,color:MUTE,marginTop:3,lineHeight:1.5}}>{x[1]}</div>
            </div>
          ))}
        </Panel>
      </Grid2>
    </div>
  );
}

function S10(){
  const cases=[
    {init:"CS",bg:ACCENT,name:"CarShip360",ind:"Freight Brokerage",
     metric:"12+ meetings / month",
     desc:"Vehicle-shipping brokerage targeting dealerships, auctions, and corporate fleet managers. The engine runs signal-based outreach on relocation and fleet-expansion triggers across email, LinkedIn, and phone, feeding a steady book of qualified shipper conversations.",
     tags:["Freight & Logistics","B2B"]},
    {init:"AI",bg:SIGNAL,name:"AutoInsurely",ind:"Insurance Brokerage",
     metric:"18+ meetings / month",
     desc:"Independent insurance brokerage targeting small-business owners across high-renewal verticals. Outreach is triggered by hiring, new-location, and licensing signals, putting the broker in front of buyers right as a coverage need opens up.",
     tags:["Insurance","B2B"]},
  ];
  return(
    <div>
      <Head title="Booked Appointments & Client Results"
        sub="The engine exists to do one thing: put qualified decision-makers on the calendar. Here is what that looks like for clients running the system."/>
      <Grid2>
        {cases.map((c,i)=>(
          <Panel key={i}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
              <div style={{width:40,height:40,borderRadius:10,background:c.bg,color:"#fff",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontWeight:800,fontSize:14}}>{c.init}</div>
              <div>
                <div style={{fontSize:15,fontWeight:800,color:NAVY}}>{c.name}</div>
                <div style={{fontSize:12,color:MUTE}}>{c.ind}</div>
              </div>
            </div>
            <div style={{fontSize:20,fontWeight:800,color:c.bg,marginBottom:8}}>{c.metric}</div>
            <div style={{fontSize:12.5,color:INK,lineHeight:1.6,marginBottom:12}}>{c.desc}</div>
            <div>{c.tags.map((t,j)=><Tag key={j}>{t}</Tag>)}</div>
          </Panel>
        ))}
      </Grid2>
      <div style={{marginTop:16,background:NAVY,borderRadius:14,padding:"22px 24px",
        display:"flex",justifyContent:"space-around",textAlign:"center"}}>
        {[["14 days","To live system"],["3 channels","Email · LinkedIn · phone"],
          ["Real signals","Every touch is triggered"]].map((x,i)=>(
          <div key={i}>
            <div style={{fontSize:22,fontWeight:800,color:"#fff"}}>{x[0]}</div>
            <div style={{fontSize:12,color:"#9FB0CC",marginTop:4}}>{x[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function S11(){
  const leads=[
    {n:"Sarah Mitchell",r:"VP Operations",s:"Replied",c:GOOD,
     m:"Thanks for reaching out, we are actually reviewing options right now.",t:"2 hours ago"},
    {n:"David Chen",r:"Director of Sales",s:"Meeting Booked",c:ACCENT,
     m:"Let's set up a call. Does Friday 2pm EST work?",t:"5 hours ago"},
    {n:"Maria Rodriguez",r:"Owner",s:"Follow-Up",c:WARN,
     m:"Interesting timing. Can you send a bit more detail on pricing?",t:"1 day ago"},
  ];
  return(
    <div>
      <Head title="Pipeline CRM (Optional Add-On)"
        sub="Track every lead and manage every reply in one place, a lightweight CRM built around your outbound workflow, so nothing slips between channels."/>
      <Grid2>
        <Panel title="Pipeline Overview">
          <div style={{display:"flex",gap:12,marginBottom:16}}>
            <Stat value="4,120" label="Leads In System" color={ACCENT}/>
            <Stat value="31" label="Replies This Week" color={GOOD}/>
          </div>
          {[["New: outreach running","2,940",ACCENT],
            ["Replied: needs action","31",GOOD],
            ["Qualified: meeting set","14",SIGNAL]].map((x,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",
              alignItems:"center",padding:"10px 12px",background:PAGE,borderRadius:9,
              marginBottom:i<2?8:0}}>
              <span style={{fontSize:12.5,color:INK,fontWeight:600}}>{x[0]}</span>
              <Pill bg={x[2]+"1A"} fg={x[2]}>{x[1]}</Pill>
            </div>
          ))}
        </Panel>
        <Panel title="Recent Reply Activity">
          {leads.map((l,i)=>(
            <div key={i} style={{padding:"10px 0",
              borderBottom:i<leads.length-1?"1px solid "+LINE:"none"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontSize:13.5,fontWeight:700,color:NAVY}}>{l.n}</div>
                <Pill bg={l.c+"1A"} fg={l.c}>{l.s}</Pill>
              </div>
              <div style={{fontSize:11.5,color:MUTE,margin:"2px 0 5px"}}>{l.r}</div>
              <div style={{fontSize:12.5,color:INK,fontStyle:"italic",lineHeight:1.45}}>
                &ldquo;{l.m}&rdquo;</div>
              <div style={{fontSize:11,color:MUTE,marginTop:4}}>{l.t}</div>
            </div>
          ))}
        </Panel>
      </Grid2>
    </div>
  );
}

/* ============================================================
   APP SHELL
   ============================================================ */

export default function App(){
  const [step,setStep]=useState(0);
  const [text,setText]=useState("");
  const icp=parseICP(text);

  useEffect(()=>{window.scrollTo&&window.scrollTo(0,0);},[step]);

  const render=()=>{
    switch(step){
      case 0: return <S0 icp={icp} text={text} setText={setText} go={()=>setStep(1)}/>;
      case 1: return <S1 icp={icp}/>;
      case 2: return <S2/>;
      case 3: return <S3/>;
      case 4: return <S4 icp={icp}/>;
      case 5: return <S5/>;
      case 6: return <S6/>;
      case 7: return <S7/>;
      case 8: return <S8/>;
      case 9: return <S9/>;
      case 10: return <S10/>;
      case 11: return <S11/>;
      default: return null;
    }
  };

  return(
    <div style={{background:PAGE,minHeight:"100vh",fontFamily:
      "'Inter','Helvetica Neue',Arial,sans-serif",color:INK}}>

      {/* dark header bar so the light logo reads */}
      <div style={{background:NAVY,padding:"14px 28px",display:"flex",
        alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <img src={LOGO} alt="TriggerX" style={{height:30}}/>
          <span style={{color:"#7E8FB0",fontSize:12,borderLeft:"1px solid #2A3B5C",
            paddingLeft:14}}>Outbound Engine</span>
        </div>
        <span style={{color:ACCENT,fontSize:12,fontWeight:700,border:"1px solid #2A3B5C",
          padding:"5px 12px",borderRadius:99}}>Interactive Demo</span>
      </div>

      {/* progress rail */}
      <div style={{background:CARD,borderBottom:"1px solid "+LINE,padding:"12px 20px",
        overflowX:"auto"}}>
        <div style={{display:"flex",gap:6,alignItems:"center",minWidth:"max-content"}}>
          {STAGES.map((s,i)=>(
            <React.Fragment key={i}>
              <div onClick={()=>setStep(i)}
                style={{padding:"7px 12px",borderRadius:8,fontSize:11.5,fontWeight:700,
                  whiteSpace:"nowrap",cursor:"pointer",
                  background:i===step?ACCENT:i<step?"#EAF1FF":"#F1F3F8",
                  color:i===step?"#fff":i<step?ACCENT_DK:"#5C6B85",
                  border:"1px solid "+(i===step?ACCENT:i<step?"#D4E2FF":LINE)}}>
                {i<step?"\u2713 ":""}{s}
              </div>
              {i<STAGES.length-1&&<span style={{color:"#C7CFDD",fontSize:11}}>&rsaquo;</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* stage body */}
      <div style={{maxWidth:880,margin:"0 auto",padding:"34px 24px 26px"}}>
        {render()}
      </div>

      {/* footer nav */}
      <div style={{maxWidth:880,margin:"0 auto",padding:"0 24px 44px",
        display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          {step>0&&(
            <Btn kind="ghost" onClick={()=>setStep(step-1)}>&larr; Back</Btn>
          )}
        </div>
        <div style={{fontSize:12,color:MUTE}}>
          Stage {step+1} of {STAGES.length}
        </div>
        <div>
          {step===0?(
            <span style={{fontSize:12,color:MUTE}}>Enter your ICP to begin</span>
          ):step<STAGES.length-1?(
            <Btn onClick={()=>setStep(step+1)}>
              Next: {STAGES[step+1]} &rarr;
            </Btn>
          ):(
            <Btn onClick={()=>{setStep(0);setText("");}}>Restart Demo &#8635;</Btn>
          )}
        </div>
      </div>
    </div>
  );
}

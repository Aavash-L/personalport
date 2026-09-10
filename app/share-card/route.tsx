import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const dynamic = 'force-static';

export async function GET() {
  const portrait = await readFile(join(process.cwd(), 'public/Aavash_PFP.png'));
  return new ImageResponse(
    <div style={{display:'flex',width:'100%',height:'100%',background:'#fbf8f2',color:'#26384a',padding:'58px 64px',fontFamily:'sans-serif',position:'relative'}}>
      <div style={{display:'flex',flexDirection:'column',width:720,justifyContent:'space-between'}}>
        <div style={{display:'flex',fontSize:20,color:'#3569a5',letterSpacing:3}}>DEVELOPER · RUTGERS CS</div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',fontSize:78,letterSpacing:-4,lineHeight:1.08}}>Aavash</div>
          <div style={{display:'flex',fontSize:78,letterSpacing:-4,lineHeight:1.08}}>Lamichhane.</div>
          <div style={{display:'flex',fontSize:28,color:'#586979',marginTop:28}}>Thoughtful software. Real-world work.</div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <div style={{display:'flex',fontSize:23}}>Previously SWE intern at Verizon</div>
          <div style={{display:'flex',fontSize:19,color:'#3569a5'}}>aavashlamichhane.com ↗</div>
        </div>
      </div>
      <div style={{display:'flex',position:'absolute',right:64,top:64,width:305,height:418,borderRadius:'155px 155px 24px 24px',overflow:'hidden',background:'#e5edf2'}}>
        {/* ImageResponse renders the local portrait into the shared PNG. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${portrait.toString('base64')}`} width={305} height={418} alt="" style={{objectFit:'cover'}} />
      </div>
      <div style={{display:'flex',position:'absolute',right:64,bottom:60,padding:'15px 22px',borderRadius:30,background:'#e5eef7',color:'#3569a5',fontSize:18}}>OPEN TO SUMMER 2027</div>
    </div>,
    { width:1200,height:630 },
  );
}

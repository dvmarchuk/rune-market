import {EmailForm} from "@/components/email-form";
export default function Home() {
  return (
      // z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex
    <main className="h-screen bg-slate-950" style={styles.backgroundImage}>
      <div className="font-mono">
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh'
          }}>
              <div >
                  {/*<h1 className=" text-4xl font-semibold text-center">RunePro <br/>The powerful <br/>decentralized exchange for Runes</h1>*/}
                  <h1 className=" text-4xl text-center">RunePro <br/></h1>
                  <h1 className="text-xl lg:text-3xl text-center">THE next generation of Bitcoin-native DeFi</h1>
                  <br/>
                  <div className="flex flex-col items-center justify-center text-center">
                      <EmailForm></EmailForm>
                  </div>
                  {/*<h2 className=" font-semibold text-white">*/}
                  {/*    Join the next generation of selling and buying Runes*/}
                  {/*</h2>*/}
              </div>
              <br/>
              <div>
                  {/*<Link href="/launch" passHref>*/}
                  {/*  <Button size={"lg"}>*/}
                  {/*    <span >Launch App</span>*/}
                  {/*  </Button>*/}
                  {/*</Link>*/}
                  {/*<Link href="https://onlygems-1.gitbook.io/hopper-finance/the-problem" passHref>*/}
                  {/*  <Button size={"lg"}  variant={"outline"} style={styles.button2}>*/}
                  {/*    <span style={styles.buttonText}>Learn More</span>*/}
                  {/*  </Button>*/}
                  {/*</Link>*/}
              </div>
          </div>
      </div>
    </main>
  );
}

const styles = {
    backgroundImage: {
        backgroundImage: "url('/sunrise.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundOpacity: '0.1',
        // height: '100vh'
    },
}

//bg-slate-950
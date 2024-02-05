import {EmailForm} from "@/components/email-form";
import {Toaster} from "@/components/ui/toaster";
import {Button} from "@/components/ui/button";
export default function Home() {
  return (
      <>
          <main className="h-screen bg-slate-950" style={styles.backgroundImage}>
              <div className="font-mono">
                  <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100vh'
                  }}>
                      <div>
                          {/*<h1 className=" text-4xl font-semibold text-center">RunePro <br/>The powerful <br/>decentralized exchange for Runes</h1>*/}
                          <h1 className=" text-4xl text-center">RunePro <br/></h1>
                          <h1 className="text-xl lg:text-3xl text-center">THE next generation of Bitcoin-native
                              DeFi</h1>
                          <br/>
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="lg:block block">
                                <h2 className="text-lg text-center lg:whitespace-nowrap whitespace-normal">
                                    The white list application is closed now.&nbsp;
                                    <br className="md:inline hidden"/>Stay tuned for next steps, and follow us on X&nbsp;
                                    <br className="md:inline hidden"/>to keep an eye out for other ways to join!
                                </h2>
                            </span>
                              <br/>
                              <a href="https://twitter.com/Rune_Pro" target="_blank" rel="noopener noreferrer">
                                  <Button className="bg-slate-950" size={"lg"} variant={"outline"}>
                                      <span>Follow on X</span>
                                  </Button>
                              </a>
                              {/*<EmailForm></EmailForm>*/}
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
          <Toaster/></>
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
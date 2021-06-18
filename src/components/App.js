import OFWsvg from "./OFWsvg";
import Episode from "./Episode";

function App() {
  return (
    <div className="container mt-5">
      <svg
        style={{ width: "0", height: "0", position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="my-cool-gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a7bd5" />
          {/* <stop offset="50%" stop-color="#224488" /> */}
          <stop offset="100%" stopColor="#3a6073" />
        </linearGradient>
      </svg>
      <div>
        <div className="my-row">
          <OFWsvg size="25em" />
        </div>
        <div className="my-row">
          <Episode
            title="The Future's Horniest Journal"
            description="We talk about Star Trek The Next Generation: Sub Rosa"
            detail="Hey, you got a fantasy-romance-ghost-story in my sci-fi! Well, you got sci-fi in my fantasy-romance-ghost-story! In this episode the boys talk about an episode of TNG in which Beverly Crusher does do sex with a ghost. But don’t worry, there’s a completely reasonable scientific explanation to all this. "
            number="1"
            align="right"
            url="https://open.spotify.com/embed/episode/0JSIBuVAygPh5PGbrn6v6Q"
            img="https://imgur.com/gPF1c2F.jpg"
            
          />
        </div>
        <div className="my-row">
          <Episode
            title="The Bumps and the Thumps"
            description="We flirt about Adventure Time: All The Little People"
            detail="Hurt me with that good ol' teen obsession. This episode definitely covers something we've all dealt with growing up, but that doesn't make it any less difficult to watch. Finn manipulates his friends into doing messed up stuff, while Jake does his best to warn him."
            number="2"
            align="right"
            url="https://open.spotify.com/embed/episode/1qeRzDSTdHWsPJXQJzCh70"
            img="https://imgur.com/G9qgnRl.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

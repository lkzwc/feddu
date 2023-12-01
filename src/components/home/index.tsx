export function Home(){
    return <div className="hero__subtitle">
    <i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>
    I'am a program developer who is enthusiastic about new technology and
    believe in code change the world!
    <div
      style={{
        display: "grid",
        width: "max-content",
        columnGap: "10px",
        gridTemplateColumns: "repeat(10,1fr)",
      }}
    >
      <i
        class="fa-brands fa-2x fa-react"
        style={{ color: "#149ECA" }}
      ></i>
      <i
        class="fa-brands fa-2x fa-vuejs"
        style={{ color: "#42B883" }}
      ></i>
      <i class="fa-brands fa-2x fa-less" style={{ color: "#f0de14" }}></i>
      <i class="fa-brands fa-2x fa-node" style={{ color: "#dfdfdf" }}></i>
      <i class="fa-brands fa-2x fa-docker"></i>
      <i
        class="fa-brands fa-2x fa-square-js"
        style={{ color: "#1053c6" }}
      ></i>
      <i class="fa-brands fa-2x fa-github"></i>
    </div>
  </div>

}
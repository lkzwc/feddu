import Theme from 'rspress/theme';

const HomeLayout = () => <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr 100px', minHeight: '90vh' }}>
  <header>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    ></link>
  </header>
  <main style={{ gridRow: 2 }}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "80px 120px", fontSize: 'x-large' }}>
      <div style={{ flex: 2 }}>
        <i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>
        <span>
          I'am a program developer who is enthusiastic about new technology and
          believe in code change the world!
        </span>
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
      <div style={{ flex: 1 }}>
        <img
          width="500"
          height="300"
          src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/5387dc7e035b3efe9d94516044de66a4.gif"
        />
      </div>
    </div>
    <div>

    </div>
  </main>
  <footer style={{ gridRow: 3, textAlign: 'center' }} >
    <div>
      {`Copyright ©️ ${new Date().getFullYear()} design by lkzwc `}
    </div>
  </footer>
</div>;

// 以下展示所有的 Props
const Layout = () => (
  <Theme.Layout
    /* 正文页 Footer 部分之前 */
    beforeDocFooter={<div>beforeDocFooter</div>}
  // bottom={<div>bottom</div>}
  />
);

export default {
  ...Theme,
  Layout,
  HomeLayout
};

export * from 'rspress/theme';
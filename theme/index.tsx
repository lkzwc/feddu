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
    <hr style={{ margin: '10px 20px' }} />
    <div style={{ columnCount: 3, gap: '100px', margin: '10px 150px' }}>
      <div>
        <div style={{ display: 'inline-grid', gap: '10px' }}>
          <h2>特别鸣谢</h2>
          <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
            <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" width="114" height="51" />
          </a>
          <a href="https://rspress.dev/zh/" target="_blank" rel="noreferrer noopener">
            <img src="https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rspress/rspress-navbar-logo-dark-0904.png" alt="Deploys by Netlify" width="114" height="51" />
          </a>
        </div>
      </div>
      <div >
        <div style={{ display: 'inline-grid', gap: '10px' }}>
          <h2>其他</h2>
          <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
            <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" width="114" height="51" />
          </a>
          <a href="https://rspress.dev/zh/" target="_blank" rel="noreferrer noopener">
            <img src="https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rspress/rspress-navbar-logo-dark-0904.png" alt="Deploys by Netlify" width="114" height="51" />
          </a>
        </div>
      </div>
      <div >
        <div style={{ display: 'inline-grid', gap: '10px' }}>
          <h2>Github</h2>
          <a href="https://github.com/lkzwc" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
            About me
          </a>
          <a href="https://rspress.dev/zh/" target="_blank" rel="noreferrer noopener">
            <img src="https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rspress/rspress-navbar-logo-dark-0904.png" alt="Deploys by Netlify" width="114" height="51" />
          </a>
        </div>
      </div>
    </div>
    <div style={{ padding: '10px' }}>
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
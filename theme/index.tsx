import Theme from "rspress/theme";
import { usePageData } from "rspress/runtime";
import Comment from "../src/components/comment/Comment";
import PasswordProtector from "../src/components/block/PasswordProtector";
import Home from "./components/Home";
import GlobalChrome from "./components/GlobalChrome";
import SiteFooter from "./components/SiteFooter";
import "./global.css";

// 自定义 Layout：注入全局装饰层、统一页脚、评论与密码保护
const CustomLayout = (props: any) => {
  const { page } = usePageData();
  const pagePassword = page.frontmatter?.password as string | undefined;

  const layout = (
    <Theme.Layout
      {...props}
      top={
        <>
          {props.top}
          <GlobalChrome />
        </>
      }
      bottom={
        <>
          {props.bottom}
          <SiteFooter />
        </>
      }
      beforeDocFooter={
        props.beforeDocFooter || (
          <div>
            <Comment />
          </div>
        )
      }
    />
  );

  if (pagePassword) {
    return (
      <PasswordProtector password={pagePassword}>{layout}</PasswordProtector>
    );
  }

  return layout;
};

export default {
  ...Theme,
  Layout: CustomLayout,
  HomeLayout: Home,
};

export * from "rspress/theme";

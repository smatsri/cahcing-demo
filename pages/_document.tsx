import { extractCritical } from "@/lib/emotion";

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

interface DocumentProps {
  css: string;
  ids: Array<string>;
}

const cssCache: Record<string, DocumentProps> = {};

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    let styles = cssCache[ctx.pathname];

    if (!styles) {
      const page = await ctx.renderPage();
      const { css, ids } = extractCritical(page.html);
      styles = { css, ids };
      cssCache[ctx.pathname] = styles;
    }

    return { ...initialProps, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion={`css ${this.props.ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

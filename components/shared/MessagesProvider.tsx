import { NextIntlProvider } from "next-intl";
import messages from "@/messages/he.json";

export const MessagesProvider = ({
  children,
}: React.PropsWithChildren<any>) => (
  <NextIntlProvider messages={messages as any} locale="he">
    {children}
  </NextIntlProvider>
);

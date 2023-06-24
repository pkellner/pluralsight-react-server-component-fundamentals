import SessionGrid from "@/sessions/session-grid/sessions";
import SessionsLayout from "@/sessions/sessions-layout";
import Layout from "@/common/layout";
import SessionLines from "@/sessions/session-lines/session-lines";

export default function Sessions({ sessionType }: { sessionType: string }) {
  return (
    <Layout>
      <SessionsLayout>
        {sessionType === "grid" ? <SessionGrid /> : <SessionLines />}
      </SessionsLayout>
    </Layout>
  );
}

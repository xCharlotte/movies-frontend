import { redirect, notFound } from "next/navigation";
import { cookies as cookieHelper, headers } from "next/headers";
import { cookies } from "@/lib/constants";

import Login from "@/components/Login/Login";
import Register from "@/register/page";

function DefaultPage() {
  return (
    <div>
      <Login />
    </div>
  );
};

async function DefaultPagePageWithData() {
  const accessToken = cookieHelper().get(cookies.ACCESS_TOKEN);

  if (accessToken) {
    return redirect("/");
  }

  return <DefaultPage />;
}

export default DefaultPagePageWithData;
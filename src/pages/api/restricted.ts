import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";

const restricted = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerAuthSession({ req, res });
  if(session) {
    res.send({
        content: "You are signed in"
    })
  }
  else {
    res.send({
        error: "You are not signed in, hence you can't view"
    })
  }
};

export default restricted;

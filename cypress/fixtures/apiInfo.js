// Todo: Excel
// Excel will have metadata as
// -------- Example ---------------------
// Method | URL      | reqHeader | reqBody             | resStatus | resHeader | resBody          |
// GET    | /posts/1 |           |                     | 200       |           | {userId:1, ...}  |
// POST   | /posts   |           | {title: "foo", ...} | 201       |           | {title:foo, ...} |

export const apiData = [
  {
    req: {
      method: "POST",
      url: "/login",
      failOnStatusCode: false,
      body: {
        workspace: "gateway",
        workspaceDataId: null,
        username: "gateway-admin",
        password: "wrongPassword",
      },
    },
    res: {
      status: 401,
      body: {
        statusCode: 401,
        statusType: "UNAUTHORIZED",
        message: "Username or password incorrect",
      },
    },
  },
  {
    req: {
      method: "POST",
      url: "/login",
      body: {
        workspace: "gateway",
        workspaceDataId: null,
        username: "gateway-admin",
        password: "pgadm1n@!23",
      },
    },
    res: {
      status: 200,
    },
  },
];

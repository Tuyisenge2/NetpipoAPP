import { responses } from "../responses";

const jwt_generator = {
  jwtProvide: {
    tags: ["Jwt-authentication"],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Jwt provider for authentication",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "Email address",
                required: true,
                example: "email@example.com",
              },
              position: {
                type: "string",
                description: "Your position",
                required: true,
                example: "enigneer",
              },
            },
          },
        },
      },
    },
    responses,
  },

  login: {
    tags: ["User"],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Login user",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "Email address",
                required: true,
                example: "email@example.com",
              },
              password: {
                type: "string",
                description: "User password",
                required: true,
                example: "passwordQWE123",
              },
            },
          },
        },
      },
    },
    consumes: ["application/json"],
    responses,
  },

  logout: {
    tags: ["User"],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Log out a user",
    consumes: ["application/json"],
    responses,
  },
};
const get_employees = {
  employees: {
    tags: ["employees"],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "get all employees",
    consumes: ["application/json"],
    responses,
  },
};
const getSingle_Employees = {
    oneEmployee: {
      tags: ["employees"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: "get single Employee",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "id of employee",
        },
      ],

      consumes: "application/json",
      responses,
    },
  };

const create_employee = {
  newEmployee: {
    tags: ["employees"],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "create new employee",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "Email address",
                required: true,
                example: "email@example.com",
              },
              position: {
                type: "string",
                description: "Your position",
                required: true,
                example: "enigneer",
              },
              name: {
                type: "string",
                description: "Your name",
                required: true,
                example: "enigneer",
              },
              salary: {
                type: "number",
                description: "Your salary number",
                required: true,
                example: "54545",
              },
            },
          },
        },
      },
    },
    responses,
  },
};

const update_Employees = {
  updateEmployee: {
    tags: ["employees"],

    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Update Employee",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "id of employee",
      },
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "Email address",
                example: "email@example.com",
              },
              position: {
                type: "string",
                description: "Your position",
                example: "enigneer",
              },
              name: {
                type: "string",
                description: "Your name",
                example: "enigneer",
              },
              salary: {
                type: "number",
                description: "Your salary number",
                example: "54545",
              },
            },
          },
        },
      },
    },
    consumes: "application/json",
    responses,
  },
};

const delete_Employees = {
  deleteEmployee: {
    tags: ["employees"],

    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "delete Employee",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "id of employee",
      },
    ],
    consumes: "application/json",
    responses,
  },
};

const users = {
  "/api/v1/auth/": {
    post: jwt_generator["jwtProvide"],
  },
  "/api/v1/employees": {
    get: get_employees["employees"],
    post: create_employee["newEmployee"],
  },
  "/api/v1/employees/{id}": {
    get: getSingle_Employees["oneEmployee"],
    put: update_Employees["updateEmployee"],
    delete: delete_Employees["deleteEmployee"],
  },
};

export default users;

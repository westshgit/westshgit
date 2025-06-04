type Roles = {
  role: string;
  permission: `can:${'read' | 'delete' | 'update' | 'create'}`[];
};

type User<T extends Roles> = {
  name: string;
  address?: string;
  roles: T;
};
let user: User<Roles> = { name: 'West', roles: { role: 'User', permission: ['can:read', 'can:update'] } };

type GetRoles<T> = T extends User<infer Roles> ? (Roles extends string ? string : never) : never;

type UserRoles = GetRoles<typeof user>;

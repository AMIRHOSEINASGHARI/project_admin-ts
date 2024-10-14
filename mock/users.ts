import { faker } from "@faker-js/faker";

export const fakeUsers = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  image: `/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  location: faker.location.country(),
}));

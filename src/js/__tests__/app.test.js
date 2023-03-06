import Team from "../app";

const team = new Team();
let person1 = {name: 'Hasel'};
let person2 = {name: 'John'}; 

test('method add success', () => {
  team.add(person1);

  expect(team.members.size).toBe(1);
});

test('method add error', () => {
  expect(() => team.add(person1)).toThrow('Такой персонаж уже существует');
});

test('method addAll', () => {
  team.addAll(person1, person2);

  expect(team.members.size).toBe(2);
});

test('method toArray()', () => {
  team.toArray();
  let type = typeof team;

  expect(type).toBe("object");
});
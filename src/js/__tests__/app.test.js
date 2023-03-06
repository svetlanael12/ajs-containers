import Team from '../app';

const team = new Team();
const person1 = { name: 'Hasel' };
const person2 = { name: 'John' };

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
  const type = typeof team;

  expect(type).toBe('object');
});

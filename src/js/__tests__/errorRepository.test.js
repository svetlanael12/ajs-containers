import ErrorRepository from '../errorRepository';

const error = new ErrorRepository();

test('methode translate success', () => {
  const result = error.translate(123);
  expect(result).toEqual('Неверный формат имени');
});

test('methode translate Unknown', () => {
  const result = error.translate(404);
  expect(result).toEqual('Unknown error');
});

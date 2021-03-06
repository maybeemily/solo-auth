const { tokenize, untokenize } = require('../../lib/utils/token');
require('dotenv').config();

describe('jwt token test', () => {
  it('can create a token', () => {
    const token = tokenize({ hi: 'there' });
    expect(token).toEqual(expect.any(String));
  });

  it('can untokenize a token', () => {
    const token = tokenize({ yo: 'there' });
    const obj = untokenize(token);
    expect(obj).toEqual({
      yo: 'there'
    });
  });
});

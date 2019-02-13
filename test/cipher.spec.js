describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "IJKLMNOPQRSTUVWXYZABCDEFGH" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 8',() => {
      assert.equal(cipher.encode(8,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"IJKLMNOPQRSTUVWXYZABCDEFGH");      
    });

    it('debería retornar "ijklmnopqrstuvwxyzabcdegfh" para "abcdefghijklmnopqrstuvwyxz" con offset 8',() => {
      assert.equal(cipher.encode(8,"abcdefghijklmnopqrstuvwyxz"),"ijklmnopqrstuvwxyzabcdegfh");      
    });

    it('debería retornar "8901234567" para "0123456789" con offset 8',() => {
      assert.equal(cipher.encode(8,"0123456789"),"8901234567");      
    });

    it('debería retornar " " para " " con offset 8',() => {
      assert.equal(cipher.encode(8," ")," ");      
    });

  });



describe('cipher.decode', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher.decode, 'function');
  });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "IJKLMNOPQRSTUVWXYZABCDEFGH" con offset 8',()=>{
      assert.equal(cipher.decode(8,"IJKLMNOPQRSTUVWXYZABCDEFGH"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });


  it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "ijklmnopqrstuvwxyzabcdefgh" con offset 8', () => {
    assert.equal(cipher.decode(8,"ijklmnopqrstuvwxyzabcdefgh"), "abcdefghijklmnopqrstuvwxyz");
  });

  it('debería retornar "0123456789" para "8901234567" con offset 8', () => {
    assert.equal(cipher.decode(8,"8901234567"), "0123456789");
  });


  it('debería retornar " " para " " con offset 8', () => {
    assert.equal(cipher.decode(8," "), " ");
  });

});

});

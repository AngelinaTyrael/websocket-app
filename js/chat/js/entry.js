; ((doc, storage) => {
  const oUsername = doc.querySelector('#username');
  const oEnterBtn = doc.querySelector('#entry');

  const init = () => {
    bindEvent();
  }

  function bindEvent() {
    oEnterBtn.addEventListener('click', handleEnterBtnClick, false);
  }

  function handleEnterBtnClick() {
    const username = oUsername.value.trim();

    if(username.length < 2) {
      alert('用户名不小于两位');
      return;
    }

    storage.setItem('username', username);
    location.href = 'index.html';
  }

  init();

})(document, localStorage);
import { renderBlock } from './lib.js'
import { APILocal } from './adapter.js'
import { IUser } from './interfaces.js'


export function renderUserBlock (userName: string, avatarUrl: string, favoriteItemsAmount?: number) {
  // const favoritesCaption = favoriteItemsAmount > 0 ? favoriteItemsAmount : 'ничего нет'
  // const hasFavoriteItems = favoriteItemsAmount ? true : false
  const items: string | number = (favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет';

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${favoriteItemsAmount ? ' active' : ''}"></i>${items}
          </p>
      </div>
    </div>
    `
  )
}

export function  getUserData(): IUser | null {
  const userStr: string = APILocal.get('user');
  
  if (userStr){
    try {
      const user: unknown = JSON.parse(userStr);
      if (typeof user === 'object' && 'userName' in user && 'avatarUrl' in user)
        return {userName: user['userName'], avatarUrl: user['avatarUrl']};
    } 
    catch (ex) {
      throw new Error(ex);
    }
  }
  return null;
}

export function getFavoritesAmount(): number {
  const userItes: unknown = APILocal.get('favoritesAmount');
  if (userItes && !isNaN(Number(userItes))) {
    return +userItes
  } else {
    return 0
  }
}

// для тестов
export function setLocalStorage(): void {
  localStorage.setItem('user', '{"userName": "Vasya", "avatarUrl":"/img/avatar.png"}');
  localStorage.setItem('favoritesAmount', '2');
}
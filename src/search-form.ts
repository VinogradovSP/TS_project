import { renderBlock } from './lib.js'
import { ISearchFormData, ISearchCB, IData, IPlace } from './interfaces.js'


export function renderSearchFormBlock () {
  
  const dateObj: Date = new Date();
  const datePlus = new Date(dateObj.getTime() + 2 *86400000);
  
  const minDate = dateObj.toLocaleDateString('en-CA');
  const curDate = dateObj.toLocaleDateString('en-CA');
  const minOutDate = datePlus.toLocaleDateString('en-CA');

  dateObj.setMonth(dateObj.getMonth() + 2);
  dateObj.setDate(0);
  
  const maxOutDate = dateObj.toLocaleDateString('en-CA');

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${curDate}" min="${minDate}" max="${maxOutDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${minOutDate}" min="${minOutDate}" max="${maxOutDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}

export function search(data: ISearchFormData, searchCB: ISearchCB): void {
  console.log('function search ISearchFormData = ', data)
}

setTimeout(() => {
  const searchCB: ISearchCB = (data: IData) => {
    if (data.error) {
      console.error(data.error);
    }else{
      console.log('searchCB', data.data);
    }
  }
}, 3000);

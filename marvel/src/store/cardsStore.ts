// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { observable, action, makeObservable, computed } from 'mobx';

// Types
import { Data } from 'types';

interface CardData extends Data {
  key: string;
  type: string;
}

class CardStore {
  @observable
  favouritesCards: CardData[] = JSON.parse(
    localStorage.getItem('savedCards') ?? '[]'
  ) as CardData[];

  @computed
  cardsKeys: string[] = this.favouritesCards.length
    ? this.favouritesCards.map((card) => card.key)
    : [];

  constructor() {
    makeObservable(this);
  }

  @action
  addCard(
    idParam: string,
    pictureParam: string,
    titleParam: string,
    typeParam: string,
    descriptionParam: string
  ) {
    const card: CardData = {
      id: idParam,
      picture: pictureParam,
      title: titleParam,
      type: typeParam,
      description: descriptionParam,
      key: typeParam + idParam
    };
    this.favouritesCards = [...this.favouritesCards, card];
    this.cardsKeys = [...this.cardsKeys, card.key];
    localStorage.setItem(
      'savedCards',
      JSON.stringify([...this.favouritesCards])
    );
  }

  @action
  deleteCard(keyParam: string) {
    this.favouritesCards = this.favouritesCards.filter(
      (card) => card.key !== keyParam
    );
    this.cardsKeys = this.cardsKeys.filter((key) => key !== keyParam);
    localStorage.setItem('savedCards', JSON.stringify(this.favouritesCards));
  }
}

export default new CardStore();

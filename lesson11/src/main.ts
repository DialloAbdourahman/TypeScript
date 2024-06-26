import './css/style.css';
import FullList from './models/FullList';
import ListItem from './models/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEnteryForm = document.getElementById(
    'itemEntryForm'
  ) as HTMLFormElement;

  itemEnteryForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault();

    const input = document.getElementById('newItem') as HTMLInputElement;

    const newEnteryText: string = input.value.trim();

    if (!newEnteryText.length) return;

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), newEnteryText);

    input.value = '';
    fullList.addItem(newItem);
    template.render(fullList);
  });

  const clearItems = document.getElementById(
    'clearItemsButton'
  ) as HTMLButtonElement;

  clearItems.addEventListener('click', (): void => {
    fullList.clear();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener('DOMContentLoaded', initApp);

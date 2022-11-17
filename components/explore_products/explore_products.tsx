import styles from './ExploreProducts.module.css';
import { FC, useEffect, useRef, useState } from "react";
import { useIntl } from 'react-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from 'axios';
import { ProductBrief } from '../../models/product';
import LoadingState from '../../models/loading_state';
import DoodleArrow from "../icons/doodle_arrow/doodle_arrow";
import SearchIcon from "../icons/search_icon/search_icon";
import DropDown from "../dropdown/dropdown";
import Tabs from "../tabs/tabs";
import ProductsList from "../products_list/products_list";
import LoadMoreButton from '../load_more_button/load_more_button';
import Spacer from '../spacer/spacer';

gsap.registerPlugin(ScrollTrigger);

const ExploreProducts: FC = () => {
  const intl = useIntl();
  const mainRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [productList, setProductsList] = useState(Array<ProductBrief>())
  const [selectedCategory, setCategory] = useState<number>(0);
  const [loadingState, setLoadingState] = useState(LoadingState.normal);

  const [requestInfo, setRequestInfo] = useState({
    pageIndex: 1,
    url: ''
  });

  const categories: Array<{
    id: string,
    name: string
  }> = JSON.parse(intl.formatMessage({ id: 'products.explore.categories' }));

  const loadData = (url: string, pageIndex: number = 1, concat: boolean = false) => {
    axios.get(`${url}/${pageIndex}`)
      .catch(error => (error)? setLoadingState(LoadingState.error) : null)
      .then(res => {
        const data = res?.data;
        setProductsList((concat)? productList.concat(data.products) : data.products);
        setLoadingState((data.isEndOfList)? LoadingState.endOfList : LoadingState.normal);
        setRequestInfo({
          pageIndex: pageIndex + 1,
          url
        });
      });
  }

  const handleCategorySwitching = (index: number) => {
    setCategory(index);
    setLoadingState(LoadingState.loading);
    if(searchInputRef.current) searchInputRef.current.value = '';
    loadData(`http://localhost:3000/api/list/${categories[index].id}`);
  }

  const handleSearchButton = () => {
    if(searchInputRef.current) {
      const searchQuery = searchInputRef.current.value.trim();

      if(searchQuery !== '') {
        setCategory(-1);
        setLoadingState(LoadingState.loading);
        loadData(`http://localhost:3000/api/search/${searchQuery.toLowerCase()}`);
      }
    }
  }

  const handleLoadMoreButton = () => {
    setLoadingState(LoadingState.loadingMore);
    loadData(requestInfo.url, requestInfo.pageIndex, true);
  }

  useEffect(() => {
    handleCategorySwitching(0);
    
    if (mainRef.current) {
      gsap.fromTo(mainRef.current.childNodes, {
        y: '5rem',
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: .5,
        stagger: .1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top 90%',
          toggleActions: 'play resume resume resume'
        }
      });
    }
  }, [mainRef]);

  return (
    <section ref={mainRef} id='search_section' className={`${styles.explore} container`}>
      <div className={styles.explore__title}>
        <h1>
          <span>{ intl.formatMessage({ id: 'products.explore.title.word1' }) }</span> { intl.formatMessage({ id: 'products.explore.title.word2' }) }
          <DoodleArrow />
        </h1>
        <p>{ intl.formatMessage({ id: 'products.explore.subtitle' }) }</p>
      </div>

      <div className={styles.explore__search_box}>
        <SearchIcon />
        <input ref={searchInputRef} type='text' placeholder={intl.formatMessage({ id: 'products.explore.searchbox.placeholder' })} />
        <button onClick={() => handleSearchButton()}>
          <p>{ intl.formatMessage({ id: 'products.explore.searchbox.exploreButton' }) }</p>
        </button>
      </div>

      <div className={styles.explore__search_options}>
        <DropDown
          items={categories}
          selectedIndex={selectedCategory}
          onChange={handleCategorySwitching}
        />

        <Tabs
          items={categories}
          selectedIndex={selectedCategory}
          onChange={handleCategorySwitching}
        />

        <button className={styles.explore__filters_button}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 14V20L10 22V14L4 5V3H20V5L14 14ZM6.404 5L12 13.394L17.596 5H6.404Z" />
          </svg>

          <p>{ intl.formatMessage({ id: 'products.explore.filters' }) }</p>
        </button>
      </div>

      <ProductsList
        productsList={productList}
        loadingState={loadingState} />

      <Spacer height='.5rem' />

      <LoadMoreButton status={loadingState} onClick={handleLoadMoreButton} />
    </section>
  );
}

export default ExploreProducts;
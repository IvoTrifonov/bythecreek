import React from 'react';
import Slideshow from './Slideshow';
import ForumBanner from './ForumBanner';
import ContentWrapper from '../../../commonStyles/ContentWrapper';

const Home = (): JSX.Element => {
  
  return (
    <ContentWrapper style={{'paddingTop': '0'}}>
      <ForumBanner />
      <br/>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dicta necessitatibus fugiat sed, minus ipsum qui aut? Deserunt inventore similique rerum minus accusamus dolore reiciendis rem? Quaerat doloremque ratione delectus aperiam ipsam adipisci quibusdam magnam. Quibusdam inventore, quia corrupti voluptatum unde nostrum maiores modi doloremque minus dicta, repellat cum, natus esse ducimus ipsum quam tempora dignissimos impedit laudantium ab perspiciatis praesentium qui. Dignissimos odio molestiae nam in accusantium. Iste sapiente quos corporis neque, labore nam consequatur ad totam commodi aut rerum obcaecati ipsam earum nemo nisi magni accusantium! Qui tempore mollitia aliquid facilis numquam sequi obcaecati velit, voluptas soluta aperiam corrupti eos quas suscipit cum quidem fugiat quis inventore adipisci officiis, recusandae hic. Soluta temporibus in, at, molestiae sapiente incidunt commodi esse, velit consectetur consequatur accusantium alias obcaecati accusamus fugiat ipsam autem reiciendis neque quis id ex quidem. Enim nam asperiores reprehenderit illum similique quos dolor possimus assumenda nesciunt veniam? Aspernatur ipsa eaque magnam aperiam commodi nobis reiciendis quo omnis iste neque, esse quia consequatur nostrum assumenda fuga dignissimos natus voluptatibus! Eligendi temporibus earum vitae provident nesciunt iure quod vel sapiente ab? Consectetur architecto quo, quia harum ut eligendi obcaecati officia nihil numquam, quam laborum deleniti quas a itaque facere?<br/>
      <Slideshow/>
    </ContentWrapper>
  );
};

export default Home;

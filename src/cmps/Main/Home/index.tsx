import React from 'react';
import Slider from './Slider';
import ForumBanner from './ForumBanner';
import ContentWrapper from '../../../commonStyles/ContentWrapper';

const Home = (): JSX.Element => {
  const images = [
    'https://images.unsplash.com/photo-1485452499676-62ab02c20e83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1508249158087-3043aa7893f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    'https://images.unsplash.com/photo-1541747494531-f1eb66417afb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    'https://images.unsplash.com/photo-1519445606020-a72dd31240a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ]

  return (
    <ContentWrapper style={{'padding-top': '0'}}>
      <ForumBanner />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt deleniti facilis non hic blanditiis laboriosam necessitatibus delectus dolores ut. Deserunt aspernatur repellat aperiam consectetur optio. Sequi voluptates debitis earum enim accusantium atque, ut nam ad sed nulla cum quae suscipit reprehenderit iste cumque voluptas exercitationem, unde, dignissimos vero consequuntur libero soluta! Corporis, officia asperiores vitae repellat optio magni, veritatis omnis ratione voluptate illo consequatur eligendi quis numquam, voluptatum distinctio! Fuga incidunt, voluptatibus eveniet vitae nemo repudiandae ipsa dolor nobis modi reiciendis molestias amet nostrum consequatur sint exercitationem veniam nisi molestiae maiores, ipsam cupiditate magnam velit tempore! Est, inventore officiis tempora aperiam consequuntur odit velit aliquid aut et id incidunt pariatur eius, dicta nihil fugit hic excepturi? Rerum exercitationem blanditiis laborum illum repellat commodi autem magni qui adipisci veniam reiciendis, soluta optio voluptate ducimus pariatur nisi expedita facilis illo, beatae nulla. Eaque, natus! Sequi, amet. Necessitatibus officia aspernatur ad? Cumque totam voluptates magnam voluptatem optio error aspernatur, necessitatibus, modi sed, accusantium eaque consectetur! Quos, in, sit quas explicabo eum illum laboriosam asperiores at tenetur quo optio! Eos voluptate rem alias, dolorem fuga fugiat voluptas voluptatem laudantium earum, magni itaque ut inventore cumque recusandae enim sapiente eveniet sit. Pariatur similique officia ut numquam quasi nihil facere atque! Distinctio porro qui neque repellendus eaque blanditiis sint molestias non officiis ad? Vero provident tenetur inventore obcaecati est dolorem officiis cum necessitatibus nihil eum, qui nisi aliquid magni aspernatur, officia laudantium. Dolorem inventore voluptates mollitia aperiam quia commodi minus tempora dolore blanditiis quod? Commodi dolore, nisi similique adipisci excepturi soluta quis harum quia, dolores cumque fugit ab porro laborum debitis tempore sunt minima tempora deserunt, laudantium recusandae necessitatibus tenetur. Pariatur laborum non dolor error atque architecto tempora adipisci, aspernatur illo quidem totam accusantium placeat eveniet voluptas facere, dolorem vitae alias ipsa rerum dicta in veniam earum asperiores. Tempora cupiditate quam voluptate deleniti sit molestias quos impedit quisquam? Eveniet obcaecati commodi sit fugiat fuga, numquam corporis libero nulla nostrum possimus. Esse delectus expedita rem explicabo ut. Assumenda quam architecto totam at, maiores libero quod ex magni tempore ullam molestiae eum nulla error ducimus? Quos, pariatur.
      <Slider slides={images} />
    </ContentWrapper>
  );
};

export default Home;

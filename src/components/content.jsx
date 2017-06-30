import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ handleMouseUp }) => (
  <section className='row'>
    <div className='content'>
      <div
        className='col-md-12'
        onMouseUp={ handleMouseUp }
      >
        <h1 className='content__head'>
        Lessons From The Internet Bubble: Growth vs. Profitability
    </h1>
        <p className='content__para content__para--first'>
      Between the spring of 2000 and the end of 2001, I had the worst,
      most stressful, and most painful business period of my life.
      While I’m sure the financial crisis of 2008 was worse for many people,
      for me it paled in comparison to the misery of this 21-month stretch.
    </p>
        <p className='content__para'>
      A very simple thing happened that year in my world.
      The market shifted from rewarding (and funding) growth to rewarding
      (and funding) profitability.
      It happened over a few quarters, but with the perspective of time and age,
      it feels like it happened overnight.
      I remember the trigger point being a 3/20/2000 article in Barron’s titled Burning Up:
      Warning: Internet companies are running out of cash — fast.
      I was on the board of several companies on their list of 100 public companies
      that would be out of money by the end of 2000 and remember that my reaction
      to the article was anger, frustration with being maligned, and incredulity
      that Barron’s would write such an irresponsible article.
    </p>
        <p className='content__para'>
      My reaction was stupid and immature. Instead,
      I should have paid attention to the message, thought about it,
      and taken appropriate action. Instead, I,
      like many of my colleagues (investors, board members, founders, and CEOs),
      operated in a state of blissful denial until everything blew up.
    </p>
        <p className='content__para'>
      I was too inexperienced in 2000 to understand this.
      Given the exuberance, many of my mentors, who had been through other financial cycles,
      chose to ignore this. The phrase “it’s different this time” echoed broadly
      throughout the land.
      I succumbed to the siren song of growth at any cost and paid the price —
      both literally and figuratively.
    </p>
        <p className='content__para'>
      Now, I have zero prediction for when the markets will shift from rewarding
      growth to profitability. Instead, I operate under the assumption that this
      can happen at any time, and the best companies can grow quickly and either
      be profitable or be able to become profitable by making manageable modifications
      to the cost structure within whatever cash constraints they currently have.
    </p>
        <p className='content__para'>
        There’s a special bonus in Mark’s post, which is in the section titled Revenue
        is Not Revenue is Not Revenue. He does a nice job of discussing the importance
        of understanding gross margin and has a line that made me smile.
    </p>
        <p className='content__para'>
    I’d add that this includes getting confused about GMV and MRR when talking about
    revenue and amazingly occasionally confusing revenue with income. It keeps going,
    when one asks the question “does profitability mean being EBITDA positive, cash flow positive,
    or net income positive? Or something else?”
    </p>
        <p className='content__para'>
    If you are a CEO of a company and any of this makes you nervous in any way,
    I encourage you to grab a few of your investors who have been investing in
    startups for at least 20 years, take them out to lunch, and talk through these
    issues with them to understand them better and figure out whether or not to care
    about this in the context of your company.
    </p>
        {/* <hr className='content__seperator' /> */}
      </div>
    </div>
  </section>
);

Content.propTypes = {
  handleMouseUp: PropTypes.func,
};

export default Content;

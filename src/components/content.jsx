import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ handleMouseChange }) => (
  <section
    id='content'
    onMouseMove={ handleMouseChange }
  >
    <h1>
        Lessons From The Internet Bubble
    </h1>
    <p>
      Between the spring of 2000 and the end of 2001, I had the worst,
      most stressful, and most painful business period of my life.
      While I’m sure the financial crisis of 2008 was worse for many people,
      for me it paled in comparison to the misery of this 21-month stretch.
    </p>
    <p>
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
    <p>
      My reaction was stupid and immature. Instead,
      I should have paid attention to the message, thought about it,
      and taken appropriate action. Instead, I,
      like many of my colleagues (investors, board members, founders, and CEOs),
      operated in a state of blissful denial until everything blew up.
    </p>
  </section>
);

Content.propTypes = {
  handleMouseChange: PropTypes.func,
};

export default Content;

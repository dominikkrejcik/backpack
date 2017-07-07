import React from 'react';
import BpkParagraph from 'bpk-component-paragraph';
import BpkStarRating, { BpkInteractiveStarRating, withInteractiveStarRatingState } from 'bpk-component-star-rating';

import starRatingReadme from 'bpk-component-star-rating/readme.md';

import DocsPageBuilder from './../../components/DocsPageBuilder';

const InteractiveStarRating = withInteractiveStarRatingState(BpkInteractiveStarRating);

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <BpkParagraph>
        By default, star ratings are shown in a static form. These can be set at half star intervals.
      </BpkParagraph>,
    ],
    examples: [
      <BpkStarRating rating={3.5} ratingLabel="3.5 stars" />,
    ],
  },
  {
    id: 'large',
    title: 'Large',
    blurb: [<BpkParagraph>Similar to the default, but in a large size.</BpkParagraph>],
    examples: [
      <BpkStarRating rating={3.5} ratingLabel="3.5 stars" large />,
    ],
  },
  {
    id: 'interactive',
    title: 'Interactive',
    blurb: [
      <BpkParagraph>
        This version allows users to leave feedback on a given feature or area by setting a rating.
      </BpkParagraph>,
    ],
    examples: [
      <InteractiveStarRating
        id="my-star-rating"
        large
        getStarLabel={(rating, maxRating) => `${rating} out of ${maxRating} stars`}
      />,
    ],
  },
];

const StarRatingPage = () => <DocsPageBuilder
  title="Star Ratings"
  blurb={[
    <BpkParagraph>
      Star ratings are used for displaying a score within a given range.
      They can also be a good way of capturing user feedback on a particular feature.
    </BpkParagraph>,
  ]}
  components={components}
  readme={starRatingReadme}
/>;

export default StarRatingPage;
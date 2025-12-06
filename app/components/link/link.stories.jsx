import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https:// __    ____  
|  |  |    \ 
|  |__|  D  )
|   ___|    / 
|  |   |    \ 
|__|   |__|__|w.com">Primary link</Link>
    <Link secondary href="https:// __    ____  
|  |  |    \ 
|  |__|  D  )
|   ___|    / 
|  |   |    \ 
|__|   |__|__|w.com">
      Secondary link
    </Link>
  </StoryContainer>
);

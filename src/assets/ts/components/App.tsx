import * as React from 'react';
import TracklistComposer from './TracklistComposer';
import ProgressComposer from './ProgressComposer';

const Any_TracklistComposer: any = TracklistComposer;
const Any_ProgressComposer: any = ProgressComposer;

const App = () => (
  <div>
    <Any_TracklistComposer />
    <Any_ProgressComposer />
  </div>
)


export default App;

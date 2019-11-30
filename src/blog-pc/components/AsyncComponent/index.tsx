import * as React from 'react';

const withAsyncComponent = function(Wrapped: any){
  return (props: any) => {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Wrapped {...props} />
      </React.Suspense>
    );
  }
}
      


export default withAsyncComponent;

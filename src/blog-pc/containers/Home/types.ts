export interface HomeProps {
  print: () => void;
  getPollDatas: () => void;
  setPollHide: (id:number, operation:string) => void;
  setPollClose: (id:number, operation:string) => void;
  setPollActive: (id:number, operation:string) => void;
  publishPollToPage:(id:number, portletId: string, checked: boolean) => void;
}
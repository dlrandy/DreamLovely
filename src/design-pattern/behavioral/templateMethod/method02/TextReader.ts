export default abstract class TextReader {
 public async readAllText(): Promise<string>{
   const bytes = await this.readAllBytes();
   const text = this.decodeBytes(bytes);
   return text;
 }
 public abstract async readAllBytes(): Promise<Buffer>;
 public abstract decodeBytes(bytes: Buffer): string;
}

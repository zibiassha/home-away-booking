import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ImageInput() {
  const name = "image";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        type="file"
        name={name}
        id={name}
        required
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
}

export default ImageInput;

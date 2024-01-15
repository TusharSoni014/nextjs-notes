import { Button } from "@/components/ui/button";
import React from "react";
import { Download } from "lucide-react";

export default function page() {
  return (
    <div>
      <Button disabled>
        <Download strokeWidth={3} />
        Please wait
      </Button>
    </div>
  );
}

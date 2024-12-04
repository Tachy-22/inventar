"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { WaitlistFormData } from "@/types/types";
import { useToast } from "@/hooks/use-toast";
import { sendWaitlistEmail } from "@/actions/nodemailer";
import { addDocument } from "@/actions/addDocument";

export function WaitlistForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await Promise.all([
        sendWaitlistEmail(formData),
        addDocument("waitlist", formData, "/"),
      ]);

      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
      });
      setFormData({ email: "", name: "", company: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <Input
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Input
        placeholder="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  );
}

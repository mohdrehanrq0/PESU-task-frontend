import React, { useEffect, useState } from 'react';

import { IHabitCreate, IHabitUpdate } from '../apiService/api/habitApi';
import { useCreateHabit } from '../apiService/query/habitQuery';
import { Button } from '../ui/button';
import {
    DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import Label from './label';
import { TimePickerInput } from './timePickerInput';

export interface IHabitData {
  _id: string;
  title: string;
  category: "health" | "work" | "personal_development" | "other" | null;
  frequency: "daily" | "weekly" | null;
  reminderTime: null | string;
  lastCompletedDate: null | string;
  completed: false;
}

const CreateHabitModal = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setData] = useState<IHabitCreate | IHabitUpdate>({
    title: "",
    category: null,
    frequency: null,
    reminderTime: null,
  });

  const [date, setDate] = useState<Date>();

  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const { mutateAsync: apiCall, isPending } = useCreateHabit();

  useEffect(() => {
    if (date) {
      const minute = date.getMinutes();
      const hour = date.getHours();

      setData((pre) => ({ ...pre, reminderTime: String(`${hour}:${minute}`) }));
    }
  }, [date]);

  const handleSave = async () => {
    if (
      data.title !== "" &&
      data.category !== null &&
      data.frequency !== null
    ) {
      await apiCall(data as IHabitCreate);
      setOpen(false);
    }
  };

  return (
    <DialogHeader>
      <DialogTitle>Add Habit</DialogTitle>
      <DialogDescription>
        <div className="mt-6">
          <div className="mb-6">
            <Label value="Enter your task" />
            <div>
              <Input
                type="text"
                className="py-[0.844rem] px-5 h-[3.188rem]"
                placeholder="Enter yor task"
                value={data.title}
                onChange={(e) =>
                  setData((pre) => ({ ...pre, title: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="mb-6">
            <Label value="Task Category" />
            <div>
              <Select
                defaultValue={
                  data.category === null ? undefined : data.category
                }
                onValueChange={(e) =>
                  // @ts-expect-error error
                  setData((pre) => ({ ...pre, category: e }))
                }
              >
                <SelectTrigger className="py-[0.844rem] px-5 h-[3.188rem]">
                  <SelectValue placeholder="Task Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="personal_development">
                    Personal Development
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-6">
            <Label value="Frequency" />
            <div>
              <Select
                defaultValue={
                  data.frequency === null ? undefined : data.frequency
                }
                onValueChange={(e) =>
                  // @ts-expect-error error
                  setData((pre) => ({ ...pre, frequency: e }))
                }
              >
                <SelectTrigger className="py-[0.844rem] px-5 h-[3.188rem]">
                  <SelectValue placeholder="Frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-6">
            <Label value="Reminder time 24Hrs (optional)" />
            <div>
              <div className="flex items-end gap-2">
                <div className="grid gap-1 text-center">
                  <Label className="text-[10px] m-0" value="Hours"></Label>
                  <TimePickerInput
                    picker="hours"
                    date={date}
                    setDate={setDate}
                    ref={hourRef}
                    onRightFocus={() => minuteRef.current?.focus()}
                  />
                </div>
                <div className="grid gap-1 text-center">
                  <Label className="text-[10px] m-0" value="Minutes"></Label>
                  <TimePickerInput
                    picker="minutes"
                    id="minutes12"
                    date={date}
                    setDate={setDate}
                    ref={minuteRef}
                    onLeftFocus={() => hourRef.current?.focus()}
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="flex !justify-between items-center mt-6">
            <DialogClose asChild>
              <Button type="button">Cancel</Button>
            </DialogClose>
            <Button
              asChild
              disabled={
                !(
                  data.title !== "" &&
                  data.category !== null &&
                  data.frequency !== null
                ) || isPending
              }
              onClick={() => handleSave()}
            >
              <div className="flex items-center gap-2 relative">Save</div>
            </Button>
          </DialogFooter>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
};

export default CreateHabitModal;

import { Command } from './interface';

export default class BaseCommand implements Command {
  public static command: string | undefined;

  public static arg0: number | undefined;

  public static arg1: number | undefined;

  public static data: string | ArrayBuffer | undefined;

  public command: string;

  public arg0: number;

  public arg1: number;

  public data: string | ArrayBuffer;

  public constructor({
    command,
    arg0,
    arg1,
    data,
  }: {
    command?: string;
    arg0?: number;
    arg1?: number;
    data?: string | ArrayBuffer;
  }) {
    const args = this.buildArgs({
      command,
      arg0,
      arg1,
      data,
    });
    this.command = args.command;
    this.arg0 = args.arg0;
    this.arg1 = args.arg1;
    this.data = args.data;
  }

  public buildArgs({
    command,
    arg0,
    arg1,
    data,
  }: {
    command?: string;
    arg0?: number;
    arg1?: number;
    data?: string | ArrayBuffer;
  }): { command: string; arg0: number; arg1: number; data: string | ArrayBuffer } {
    const constructor = this.constructor as unknown as BaseCommand;
    const finalCommand = command === undefined ? constructor.command : command;
    if (finalCommand === undefined) throw TypeError('{command} not provided');
    const finalArg0 = arg0 === undefined ? constructor.arg0 : arg0;
    if (finalArg0 === undefined) throw TypeError('{arg0} not provided');
    const finalArg1 = arg1 === undefined ? constructor.arg1 : arg1;
    if (finalArg1 === undefined) throw TypeError('{arg1} not provided');
    const finalData = data === undefined ? constructor.data : data;
    if (finalData === undefined) throw TypeError('{data} not provided');

    return {
      command: finalCommand,
      arg0: finalArg0,
      arg1: finalArg1,
      data: finalData,
    };
  }
}
// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import JournalIDL from '../target/idl/Journal.json';
import type { Journal } from '../target/types/Journal';

// Re-export the generated IDL and type
export { Journal, JournalIDL };

// The programId is imported from the program IDL.
export const Journal_PROGRAM_ID = new PublicKey(JournalIDL.address);

// This is a helper function to get the Journal Anchor program.
export function getJournalProgram(provider: AnchorProvider) {
  return new Program(JournalIDL as Journal, provider);
}

// This is a helper function to get the program ID for the Journal program depending on the cluster.
export function getJournalProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Journal program on devnet and testnet.
      return new PublicKey('CounNZdmsQmWh7uVngV9FXW2dZ6zAgbJyYsvBpqbykg');
    case 'mainnet-beta':
    default:
      return Journal_PROGRAM_ID;
  }
}

# Solana Journal Dapp

This project implements a simple journal entry system on the Solana blockchain using the Anchor framework. Users can create, update, and delete journal entries.

## Smart Contract Overview

The smart contract provides the following functionality:

1. Create a new journal entry
2. Update an existing journal entry
3. Delete a journal entry

### Account Structure

The main account structure used in this contract is `JournalEntryState`, which stores:

- `owner`: The public key of the entry owner
- `title`: The title of the entry (max 20 characters)
- `message`: The content of the entry (max 200 characters)
- `entry_id`: An identifier for the entry

### Instructions

#### 1. Create Entry

Creates a new journal entry with a given title and message.

```rust
pub fn create_entry(ctx: Context<CreateEntry>, title: String, message: String) -> Result<()>
```

#### 2. Update Entry

Updates the message of an existing journal entry.

```rust
pub fn update_entry(ctx: Context<UpdateEntry>, _title: String, new_message: String) -> Result<()>
```

#### 3. Delete Entry

Deletes an existing journal entry.

```rust
pub fn delete_entry(_ctx: Context<DeleteEntry>, _title: String) -> Result<()>
```

## Getting Started

To use this smart contract, you'll need to:

1. Set up a Solana development environment
2. Install the Anchor framework
3. Deploy the contract to a Solana cluster (devnet, testnet, or mainnet)

## Usage

After deploying the contract, you can interact with it using a client-side application. Here are the main operations:

1. Create a new entry by calling `create_entry` with a title and message
2. Update an entry by calling `update_entry` with the title and new message
3. Delete an entry by calling `delete_entry` with the title

## Security Considerations

- Only the owner of an entry can update or delete it
- Entry titles are used as seeds for PDAs (Program Derived Addresses), ensuring uniqueness per owner

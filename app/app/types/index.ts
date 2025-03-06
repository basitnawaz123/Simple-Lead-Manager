export interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
}

export enum LeadStatus {
    New = "New",
    Engaged = "Engaged",
    ProposalSent = "Proposal Sent",
    ClosedWon = "Closed-Won",
    ClosedLost = "Closed-Lost",
  }
  